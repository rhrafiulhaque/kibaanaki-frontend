import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import DashboardLayout from '../../Dashboard/DashboardLayout';
import { useGetProductQuery } from '../../features/product/productApi';
import { useAddReviewMutation } from '../../features/ratingsreviews/ratingsReviewsApi';
import { setRatings } from '../../features/ratingsreviews/ratingsReviewsSlice';
import Loading from '../Loading/Loading';
import AddRatingStar from './AddRatingStar';

const AddReviews = () => {
    const rating = useSelector((state) => state.reviews.ratings);
    const user = useSelector((state) => state.auth.userDetails);
    const [review, setReview] = useState('')
    const { id } = useParams()
    const { data: productDetails, isLoading: productDetailsLoading } = useGetProductQuery(id)
    const [addReview, { isLoading: addReviewLoading, isSuccess: addReviewSuccess }] = useAddReviewMutation()

    const { product } = productDetails || {};
    const dispatch = useDispatch()

    const handleReviewRating = (e) => {
        e.preventDefault()
        const data = {
            userEmail: user.email,
            userId: user.userId,
            rating,
            reviewText: review,
            product
        }
        addReview(data)
        dispatch(setRatings(null))
    }

    useEffect(() => {
        if (addReviewSuccess) {
            toast.success("Review Sumitted Successfullly")
        }
    })
    if (productDetailsLoading || addReviewLoading) {
        return <Loading />
    }
    return (
        <DashboardLayout>
            <div className='col-span-9'>
                <div>
                    <div className='flex mt-20 align-middle justify-center items-center'>
                        <img className='w-20 mr-4' src={product.imageUrl} alt="" />
                        <h1 className='font-semibold text-2xl'>{product.productName}</h1>
                    </div>

                    <div>
                        <AddRatingStar />
                    </div>
                    <form className='mt-6' onSubmit={handleReviewRating} >
                        <div>
                            <div>
                                <label className="text-gray-600 mb-2 block">Write Review <span className="text-primary">*</span></label>
                                <textarea onChange={(e) => setReview(e.target.value)} className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <button className='mt-10 px-3 py-2 border border-primary text-primary hover:text-white hover:bg-primary rounded-md duration-300 transition'>Submit</button>
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default AddReviews;