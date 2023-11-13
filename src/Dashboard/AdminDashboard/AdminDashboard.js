import { faBox, faMessage, faMoneyBillTransfer, faMoneyBillTrendUp, faNotesMedical, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Loading from '../../components/Loading/Loading';
import { useGetAllUserQuery } from '../../features/auth/authApi';
import { useAdminGetOrderListQuery, useGetMonthlyOrderQuery } from '../../features/order/orderApi';
import { useGetMonthlyAddOrderQuery, useGetProductsQuery } from '../../features/product/productApi';
import AdminDashboardLayout from '../AdminDashboardLayout';

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const AdminDashboard = () => {
    const [monthlyOrderData, setMonthlyOrderData] = useState([]);
    const [monthlyProductCountData, setMonthlyProductCountData] = useState([]);
    const { data: products, isLoading: productsLoading } = useGetProductsQuery()
    const { data: monthlyOrder, isLoading: monthlyOrderLoading } = useGetMonthlyOrderQuery()
    const { data: monthlyProductCount, isLoading: monthlyProductCountLoading, error } = useGetMonthlyAddOrderQuery()
    const { data: users, isLoading: userLoading } = useGetAllUserQuery()
    const { data: orders, isLoading: orderLoading } = useAdminGetOrderListQuery()


    useEffect(() => {
        if (!productsLoading && !userLoading && !orderLoading && !monthlyOrderLoading && monthlyOrder) {
            const dataWithMonthNames = monthlyOrder.map(item => ({
                month: monthNames[item._id.month - 1],
                totalOrders: item.totalOrders
            }));
            setMonthlyOrderData(dataWithMonthNames);
        }
    }, [productsLoading, userLoading, orderLoading, monthlyOrderLoading, monthlyOrder]);

    useEffect(() => {
        if (!productsLoading && !monthlyProductCountLoading && !monthlyOrderLoading && monthlyProductCount) {
            const dataWithMonthNames = monthlyProductCount.map(item => ({
                month: monthNames[item._id.month - 1],
                productCount: item.productCount
            }));
            setMonthlyProductCountData(dataWithMonthNames);
        }
    }, [productsLoading, monthlyProductCountLoading, monthlyProductCount, monthlyOrderLoading]);



    if (productsLoading || userLoading || orderLoading || monthlyOrderLoading || monthlyProductCountLoading) {
        return <Loading />
    }






    const calculateTotalProductPrice = (products) => {
        let totalProductsPrice = 0;

        products.forEach(product => {
            totalProductsPrice += product?.price

        });

        return totalProductsPrice;
    }

    const calculateTotalOrderAmount = (orders) => {
        let totalOrderProductsPrice = 0;

        orders.forEach(order => {
            order.products.forEach(product => {
                totalOrderProductsPrice += product.price * product.quantity
            })
        });

        return totalOrderProductsPrice;
    }

    return (
        <AdminDashboardLayout>
            <div className='col-span-9'>

                <div className=' mt-10'>
                    <h1 className='text-3xl my-5 font-semibold text-center uppercase'>Over View</h1>

                    <div className='grid grid-cols-3 mb-10 gap-5'>
                        <div className='bg-[#D1E8FB] rounded-md space-y-3 text-center p-5'>
                            <FontAwesomeIcon icon={faBox} className='rounded-full p-4 text-gray-700 text-xl bg-[#B0CBE6]' />
                            <h1 className='text-3xl text-[#1C2E68]'>{products?.products?.length}</h1>
                            <p className='text-xl text-[#455B83]'>Total Products</p>
                        </div>
                        <div className='bg-[#CFF0FC] rounded-md space-y-3 text-center p-5'>
                            <FontAwesomeIcon icon={faUserCircle} className='rounded-full p-4 text-[#0D4EAC] text-xl bg-[#B0CBE6]' />
                            <h1 className='text-3xl text-[#022069]'>{users?.user?.length}</h1>
                            <p className='text-xl text-[#5C809A]'>Total Users</p>
                        </div>
                        <div className='bg-[#FEF6CC] rounded-md space-y-3 text-center p-5'>
                            <FontAwesomeIcon icon={faNotesMedical} className='rounded-full p-4 text-[#BC9847] text-xl bg-[#F3E1A8]' />
                            <h1 className='text-3xl text-[#673B00]'>{orders?.data?.length}</h1>
                            <p className='text-xl text-[#e0b75f]'>Total Orders</p>
                        </div>
                        <div className='bg-[#FEE6D6] rounded-md space-y-3 text-center p-5'>
                            <FontAwesomeIcon icon={faMessage} className='rounded-full p-4 text-[#AD182B] text-xl bg-[#F3C8BF]' />
                            <h1 className='text-3xl text-[#6C0018]'>26</h1>
                            <p className='text-xl text-[#99354b]'>Total Reviews</p>
                        </div>
                        <div className='bg-[#FEF6CC] rounded-md space-y-3 text-center p-5'>
                            <FontAwesomeIcon icon={faMoneyBillTransfer} className='rounded-full p-4 text-[#BC9847] text-xl bg-[#F3E1A8]' />
                            <h1 className='text-3xl text-[#673B00]'>{calculateTotalProductPrice(products?.products)}</h1>
                            <p className='text-xl text-[#e0b75f]'>Total Product Price</p>
                        </div>
                        <div className='bg-[#CFF0FC] rounded-md space-y-3 text-center p-5'>
                            <FontAwesomeIcon icon={faMoneyBillTrendUp} className='rounded-full p-4 text-[#0D4EAC] text-xl bg-[#B0CBE6]' />
                            <h1 className='text-3xl text-[#022069]'>{calculateTotalOrderAmount(orders.data)}</h1>
                            <p className='text-xl text-[#5C809A]'>Total Order Amount</p>
                        </div>

                    </div>
                </div>



                <div className=''>
                    <h1 className='text-2xl font-semibold my-4'>Monthly Order Chart</h1>
                    <LineChart width={600} height={300} data={monthlyOrderData}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="totalOrders" stroke="#8884d8" />
                    </LineChart>
                </div>


                <div className=''>
                    <h1 className='text-2xl font-semibold my-4'>Monthly Added Product Chart</h1>
                    <BarChart width={600} height={300} data={monthlyProductCountData}>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="productCount" fill="#82ca9d" />
                    </BarChart>
                </div>



            </div>
        </AdminDashboardLayout>



    );
};

export default AdminDashboard;