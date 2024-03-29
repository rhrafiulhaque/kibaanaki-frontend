import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DashboardLayout from '../../Dashboard/DashboardLayout';
import { useGetOrderDetailsQuery } from '../../features/order/orderApi';
import Loading from '../Loading/Loading';

const OrderDetails = () => {

    const { id } = useParams();
    const user = useSelector(state => state.auth)
    const email = user.userDetails.email

    const { data: orderDetails, isLoading } = useGetOrderDetailsQuery({ id, email })
    if (isLoading) {
        return <Loading />
    }
    return (
        <DashboardLayout>
            <div className='col-span-9'>

                <div>
                    <h1 className='text-xl my-2'>Order Details</h1>
                    <div className='my-5 flex flex-col lg:flex-row lg:space-y-0 space-y-3 lg:justify-between justify-center align-middle items-center'>
                        <div>
                            <h1 className='font-semibold text-xl'>Sold By</h1>
                            <p>KinbaaNaki</p>
                        </div>
                        <div className=''>
                            <h1 className='font-semibold text-xl'>Order Number</h1>
                            <p className='text-sm'>7984HJEUI8OP</p>
                        </div>
                        <div className=''>
                            <h1 className='font-semibold text-xl'>Order Date</h1>
                            <p className='text-sm'>{new Date(orderDetails?.data?.createdAt).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</p>
                        </div>

                        {/* <button className='border border-primary px-4 py-3 rounded-sm bg-transparent text-primary hover:bg-primary hover:text-white transition duration-300 '> Write A review</button> */}
                    </div>
                </div>

                <div className='hidden mx-auto w-full lg:flex justify-center align-middle text-center items-center '>

                    <ol class="flex items-center w-full">
                        <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                            <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                                <svg class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                </svg>
                            </span>
                        </li>
                        <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                </svg>
                            </span>
                        </li>
                        <li class="flex items-center">
                            <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                                <svg class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                </svg>
                            </span>
                        </li>
                    </ol>

                </div>




                <div className='mt-7'>
                    {orderDetails.data.products.map((product) => (
                        <div className='py-3 px-4'>
                            <div className='text-right hidden lg:block '>
                                <Link to={`/writereview/${product._id}`} className=' transition duration-300 px-4 py-3 border border-primary rounded-md text-primary hover:text-white hover:bg-primary'>Write Review </Link>
                            </div>
                            <div className='lg:flex  justify-between items-center font-semibold shadow '>
                                <div className='lg:flex gap-4'>
                                    <img className='w-28 h-28' src={product.img} alt='img' />
                                    <h1>
                                        {product.product_name}
                                    </h1>
                                </div>
                                <h1>Qty :{product.quantity}</h1>
                                <h1>${product.price * product.quantity}</h1>
                                <div className='mt-6'>
                                    <Link to={`/writereview/${product._id}`} className='lg:hidden transition duration-300 px-4 py-3 border border-primary rounded-md text-primary hover:text-white hover:bg-primary'>Write Review </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </DashboardLayout>
    );
};

export default OrderDetails;