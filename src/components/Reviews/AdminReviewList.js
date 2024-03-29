import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import AdminDashboardLayout from '../../Dashboard/AdminDashboardLayout';
import ProductRatings from '../../Utilities/ProductRatings';
import { useDeleteReviewsByUserIdMutation, useGetAllReviewsQuery } from '../../features/ratingsreviews/ratingsReviewsApi';
import Loading from '../Loading/Loading';

const AdminReviewList = () => {

    const { data: reviewList, isLoading: reviewListLoading, isError: reviewListIsError } = useGetAllReviewsQuery()

    const [deleteReviewsByUserId, { isSuccess: deleteReviewSuccess, isLoading: deleteReviewLoading }] = useDeleteReviewsByUserIdMutation()


    let content = ""
    useEffect(() => {
        if (deleteReviewSuccess) {
            toast.error('Review Deleted Successfully')
        }
    }, [deleteReviewSuccess])


    if (reviewListLoading || deleteReviewLoading) {
        return <Loading />
    }
    console.log(reviewList.data[0].product_id)
    if (!reviewListLoading && !reviewListIsError && reviewList.data.length === 0) {
        content = <p className=' text-4xl text-primary text-center'>There Have No any Reviews</p>
    }
    if (!reviewListLoading && !reviewListIsError && reviewList.data.length > 0) {
        content = <table className="w-full">
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>User Email</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Ratings</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Review</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Options</th>
                </tr>
            </thead>
            <tbody className='divide-y divide-gray-100'>

                {
                    reviewList.data.map((rev, i) => {
                        const _id = rev._id;
                        const userId = rev.userId;
                        const email = rev.userEmail
                        return <tr className='bg-white'>
                            <th>{i + 1}</th>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{rev.userEmail}</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'><ProductRatings key={rev._id} ratings={rev.rating} /></td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{rev.reviewText}</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap space-x-4'>
                                <FontAwesomeIcon className='cursor-pointer hover:text-primary duration-300 transition' onClick={() => deleteReviewsByUserId({ userId, email, _id })} icon={faTrash} />
                                {/* <Link to={''}><FontAwesomeIcon className='cursor-pointer hover:text-primary duration-300 transition' icon={faPenNib} /></Link> */}
                            </td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    }

    return (
        <AdminDashboardLayout>

            <div className='col-span-9 '>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Review List</h1>
                {content}

            </div>
        </AdminDashboardLayout>
    );
};

export default AdminReviewList;