import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import AdminDashboardLayout from '../../Dashboard/AdminDashboardLayout';
import { useDeleteBrandMutation, useGetBrandListQuery } from '../../features/brand/brandApi';
import Loading from '../Loading/Loading';

const BrandList = () => {
    const { data: allBrand, isLoading, isError, error } = useGetBrandListQuery();
    const [deleteBrand, { isLoading: deleteLoading, isSuccess }] = useDeleteBrandMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success('Deleted Successfully');
        }
    }, [isSuccess])

    if (isLoading || deleteLoading) {
        return <Loading />
    }

    console.log(allBrand)
    return (
        <AdminDashboardLayout>

            <div className='col-span-9 '>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Brand List</h1>
                <table className="w-full">

                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Image</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Brand Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Options</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>

                        {
                            allBrand.data.map((brand, i) => (
                                <tr className='bg-white'>
                                    <th>{i + 1}</th>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><img className='w-14 h-14' src={brand.brandImg} alt="" /></td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{brand.brand.charAt(0).toUpperCase() + brand.brand.slice(1)}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <FontAwesomeIcon onClick={() => deleteBrand(brand._id)} className='cursor-pointer hover:text-primary duration-300 transition' icon={faTrash} />
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </AdminDashboardLayout>
    );
};

export default BrandList;