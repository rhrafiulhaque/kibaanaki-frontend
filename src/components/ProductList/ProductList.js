import AdminDashboardLayout from '../../Dashboard/AdminDashboardLayout';
import { useGetProductsQuery } from '../../features/product/productApi';
import Loading from '../Loading/Loading';

const ProductList = () => {
    const { data: allProducts, isLoading, isError, error } = useGetProductsQuery();
    if (isLoading) {
        return <Loading />
    }
    return (
        <AdminDashboardLayout>

            <div className='col-span-9 '>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Product List</h1>
                <table className="w-full">

                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Image</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Product Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Brand</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Price</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Color</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>

                        {
                            allProducts.products.map((product, i) => (
                                <tr className='bg-white'>
                                    <th>{i + 1}</th>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><img src={product.imageUrl} alt="" /></td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.productName}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.brand}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.price}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.category}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{product.color}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </AdminDashboardLayout>
    );
};

export default ProductList;