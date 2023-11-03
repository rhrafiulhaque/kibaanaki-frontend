import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useAdminGetOrderListQuery, useUpdateDeliveryStatusMutation } from '../../features/order/orderApi';
import AdminDashboardLayout from '../AdminDashboardLayout';

const AllOrderList = () => {
    const user = useSelector((state) => state.auth.userDetails);

    const { data: orderList, isLoading } = useAdminGetOrderListQuery()
    const [updateDeliveryStatus, { isLoading: updateLoading }] = useUpdateDeliveryStatusMutation()

    if (isLoading || updateLoading) {
        return <Loading />
    }
    if (!orderList || orderList.length === 0) {
        return <p>No orders found.</p>;
    }

    const changeDeliveryStatus = (e, user) => {
        const deliveryStatus = e.target.value;
        const id = user._id
        const email = user.email
        updateDeliveryStatus({ deliveryStatus, email, id })
    }

    return (
        <AdminDashboardLayout>
            <div className='col-span-9'>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Order List</h1>
                {
                    orderList.data.map((order) => (

                        <div className=' my-5 py-5 px-4  shadow'>
                            <div className='flex justify-between'>
                                <div className='flex gap-4 '>
                                    {
                                        order.products.map((product) => (
                                            <img className='w-20' src={product.img} alt="" />
                                        ))
                                    }
                                </div>
                                <Link to={`/getorderdetails/${order._id}`} className=' border border-primary rounded-sm transition duration-300 h-10 px-4 py-2 bg-transparent text-primary hover:bg-primary hover:text-white'>View Order</Link>
                            </div>
                            <thead className="text-md text-gray-700  bg-gray-50">
                                <tr>
                                    <th className="px-2 py-3">Order Number</th>
                                    <th className="px-2 py-3">User Email</th>
                                    <th className="px-2 py-3">Purchased</th>
                                    <th className="px-2 py-3">Quanity</th>
                                    <th className="px-2 py-3">Total</th>
                                    <th className="px-2 py-3">Paid Status</th>
                                    <th className="px-2 py-3">Delivery Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-3 py-3">{order._id} </td>
                                    <td className="px-3 py-3">{order.email} </td>
                                    <td className="px-3 py-3">{new Date(order.createdAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })} </td>
                                    <td className="px-3 py-3">x{order.products.reduce((acc, product) => acc + product.quantity, 0)} </td>
                                    <td className="px-3 py-3">${order.products.reduce((acc, product) => acc + product.price * product.quantity, 0)} </td>
                                    <td className="px-3 py-3">{order.paidStatus === true ? 'Paid' : 'Unpaid'} </td>
                                    <td className="">
                                        <select name="dlvsts" onChange={(e) => changeDeliveryStatus(e, order)} className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                            <option selected={order.deliveryStatus === 'Processing'} value="Processing">Processing</option>
                                            <option selected={order.deliveryStatus === 'OnTheWay'} value="OnTheWay" >On the Way</option>
                                            <option selected={order.deliveryStatus === 'Delivered'} value="Delivered">Delivered</option>
                                        </select> </td>
                                </tr>
                            </tbody>
                        </div>
                    ))
                }
            </div>
        </AdminDashboardLayout>
    );
};

export default AllOrderList;