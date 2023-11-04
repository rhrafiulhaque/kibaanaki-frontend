import { faBox, faMessage, faMoneyBillTransfer, faMoneyBillTrendUp, faNotesMedical, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Loading from '../../components/Loading/Loading';
import { useGetAllUserQuery } from '../../features/auth/authApi';
import { useAdminGetOrderListQuery } from '../../features/order/orderApi';
import { useGetProductsQuery } from '../../features/product/productApi';
import AdminDashboardLayout from '../AdminDashboardLayout';



const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 2400, amt: 2400 },
    { name: 'Page C', uv: 150, pv: 2400, amt: 2400 },
    { name: 'Page D', uv: 320, pv: 2400, amt: 2400 },

];

const config = {
    type: 'line',
    data,
    options: {
        scales: {
            x: {
                border: {
                    color: 'red'
                }
            }
        }
    }
};
const AdminDashboard = () => {
    const { data: products, isLoading: productsLoading } = useGetProductsQuery()
    const { data: users, isLoading: userLoading } = useGetAllUserQuery()
    const { data: orders, isLoading: orderLoading } = useAdminGetOrderListQuery()

    if (productsLoading || userLoading || orderLoading) {
        return <Loading />
    }
    console.log(orders)


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



                <div className='grid grid-cols-2 gap-6'>
                    <LineChart width={400} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>


                    <BarChart width={600} height={350} data={data}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="uv" fill="#8884d8" barSize={30} />
                    </BarChart>

                </div>
            </div>
        </AdminDashboardLayout>



    );
};

export default AdminDashboard;