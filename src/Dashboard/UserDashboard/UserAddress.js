import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useGetUserQuery, useUpdateUserAddressMutation } from '../../features/auth/authApi';
import DashboardLayout from '../DashboardLayout';

const UserAddress = () => {

    const user = useSelector((state) => state.auth.userDetails);
    const { data: userDetails, isLoading, isError } = useGetUserQuery(user.email);
    const [updateUserAddress, { isSuccess }] = useUpdateUserAddressMutation();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            address: e.target.address.value,
            city: e.target.city.value,
            district: e.target.district.value,
            email: user.email
        }
        updateUserAddress(data)

        if (isSuccess) {
            toast.success(`User Address Update Successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }
    return (
        <DashboardLayout>
            {/* Profile Info Start  */}
            <div className='col-span-9 grid grid-cols-3 gap-4'>
                <div className="col-span-8 border border-gray-200 p-4 rounded">
                    <h3 className="text-lg font-medium capitalize mb-4 bg-[#E9E4E4] p-4 text-gray-600 rounded w-full">Update Address Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <label className='text-gray-600 mb-2 block'>Address <span className='text-red-600'>*</span> </label>
                                <input name='address' type="text" defaultValue={userDetails?.user?.address} className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400' placeholder='Enter your Address'
                                />
                            </div>

                            <div>
                                <label className='text-gray-600 mb-2 block'>City <span className='text-red-600'>*</span> </label>
                                <input type="text" name='city' defaultValue={userDetails?.user?.city} className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'

                                />
                            </div>
                            <div>
                                <label className='text-gray-600 mb-2 block'>District <span className='text-red-600'>*</span> </label>
                                <input type="text" name='district' defaultValue={userDetails?.user?.district} className='block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400'

                                />
                            </div>



                        </div>
                        <button className=" mt-6 border border-primary px-8 py-2 bg-primary disabled:bg-red-400 disabled:hover:text-white text-white rounded  hover:bg-transparent hover:text-primary transition ">Checkout</button>
                    </form>
                </div>
            </div>
            {/* Profile Info End  */}
        </DashboardLayout>
    );
};

export default UserAddress;