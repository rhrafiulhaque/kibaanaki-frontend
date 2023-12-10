import { faMarker, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AdminDashboardLayout from '../../Dashboard/AdminDashboardLayout';
import { useDeleteProductMutation, useGetProductsQuery } from '../../features/product/productApi';
import Loading from '../Loading/Loading';

const ProductList = () => {
    const { data: allProducts, isLoading, isError, error } = useGetProductsQuery();
    const [deleteProduct, { isLoading: deleteProductLoading, isSuccess: deleteProductSuccess, error: deleteProductError }] = useDeleteProductMutation()




    useEffect(() => {
        if (deleteProductSuccess) {
            toast.error("Product Deleted");
        }
    }, [deleteProductSuccess])
    if (isLoading || deleteProductLoading) {
        return <Loading />
    }
    return (
        <AdminDashboardLayout>

            <div className='col-span-9 '>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Product List</h1>
                <table className="w-full hidden lg:block">
                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Image</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Product Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Brand</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Options</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>

                        {
                            allProducts.products.map((product, i) => (
                                <tr className='bg-white'>
                                    <th>{i + 1}</th>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><img src={product.imageUrl} alt="" /></td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.productName}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.brand?.toUpperCase()}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.price}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.category}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap gap-4 '>
                                        <FontAwesomeIcon onClick={() => deleteProduct(product._id)} className='cursor-pointer hover:text-primary duration-300 transition' icon={faTrash} />
                                        <Link to={`/admin/updateproduct/${product._id}`}><FontAwesomeIcon className='cursor-pointer hover:text-primary ml-5 duration-300 transition' icon={faMarker} /></Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

                <div>


                    {
                        allProducts.products.map((product, i) => (
                            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow lg:hidden dark:bg-gray-800 dark:border-gray-700 my-3">
                                <img className="p-8 rounded-t-lg" src={product.imageUrl} alt="" />

                                <div className="px-5 pb-5 space-y-2">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.productName}</h5>
                                    <h5 className="text-md  tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Brand:</span> {product.brand?.toUpperCase()}</h5>
                                    <h5 className="text-md  tracking-tight text-gray-900 dark:text-white"><span className='font-semibold'>Category:</span> {product.category}</h5>
                                    <h5 className="text-3xl font-bold text-gray-900 dark:text-white">$599</h5>
                                    {/* <Link to={} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link> */}
                                    <div className='flex justify-between'>
                                        <button className='px-3 py-2 bg-white text-primary rounded-md border border-primary hover:text-white hover:bg-primary'><FontAwesomeIcon onClick={() => deleteProduct(product._id)} className='cursor-pointer hover:text-primary duration-300 transition' icon={faTrash} /> Delete</button>
                                        <button className='px-3 py-2 bg-white text-green-500 rounded-md border border-green-500 hover:text-white hover:bg-green-500'><Link to={`/admin/updateproduct/${product._id}`}><FontAwesomeIcon className='cursor-pointer hover:text-primary ml-5 duration-300 transition' icon={faMarker} /> Edit</Link></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </AdminDashboardLayout>
    );
};

export default ProductList;