import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import AdminDashboardLayout from '../../Dashboard/AdminDashboardLayout';
import { useDeleteCategoryMutation, useGetCategoryListQuery } from '../../features/category/categoryApi';
import Loading from '../Loading/Loading';

const CategoryList = () => {
    const { data: allCategory, isLoading, isError, error } = useGetCategoryListQuery();
    const [deleteCategory, { isLoading: deleteLoading, isSuccess }] = useDeleteCategoryMutation();

    useEffect(() => {
        if (isSuccess) {
            toast.success('Deleted Successfully');
        }
    }, [isSuccess])

    if (isLoading || deleteLoading) {
        return <Loading />
    }
    return (
        <AdminDashboardLayout>

            <div className='col-span-9 '>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Category List</h1>
                <table className="w-full">

                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Image</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Category Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Options</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>

                        {
                            allCategory.data.map((cat, i) => (
                                <tr className='bg-white'>
                                    <th>{i + 1}</th>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><img className='w-14 h-14' src={cat.catImg} alt="" /></td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{cat.category.charAt(0).toUpperCase() + cat.category.slice(1)}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>
                                        <FontAwesomeIcon onClick={() => deleteCategory(cat._id)} className='cursor-pointer hover:text-primary duration-300 transition' icon={faTrash} />
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

export default CategoryList;