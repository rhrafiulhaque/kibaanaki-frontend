import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import { useGetUserQuery, useUpdateUserMutation } from '../../features/auth/authApi';
import DashboardLayout from '../DashboardLayout';



const UserProfile = () => {
    // const userDetails = useSelector((state) => state.auth.userDetails)
    const { email } = useParams();
    const { data: userDetails, isLoading, isError } = useGetUserQuery(email);
    const [updateUser, { isSuccess }] = useUpdateUserMutation();
    console.log(userDetails?.user)
    if (isLoading) {
        return <Loading />
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            birthdate: e.target.birthdate.value,
            gender: e.target.gender.value,
            phonenumber: e.target.phonenumber.value,
            email: e.target.email.value
        }
        updateUser(data)
        if (isSuccess) {
            toast.success(`User Update Successfully`, {
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
            <div className='col-span-9 '>
                <h2 className='font-semibold text-lg text-gray-600 py-5'>Profile Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className='space-y-4'>
                        <div>
                            <label className="text-gray-600 mb-2 block">Name <span className="text-primary">*</span></label>
                            <input type="text" name='name' defaultValue={userDetails?.user?.name} className="block w-full max-w-md border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            {/* <div>
                                <label className="text-gray-600 mb-2 block required">Birth Date <span className="text-primary">*</span></label>
                                <input
                                    type="date"
                                    defaultValue={new Date(userDetails?.user?.birthDate).toISOString().substr(0, 10)} 
                                    name='birthdate'
                                    className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0"
                                />
                            </div> */}
                            <div>
                                <label className="text-gray-600 mb-2 block">Gender <span className="text-primary">*</span></label>
                                <select name="gender" id="" required className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0">
                                    <option value="">Select Option</option>
                                    <option value="Male" selected={userDetails?.user?.gender === 'Male'}>Male</option>
                                    <option value="Female" selected={userDetails?.user?.gender === 'Female'}>Female</option>
                                </select>

                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <div>
                                <label className="text-gray-600 mb-2 block">Email<span className="text-primary">*</span></label>
                                <input type="email" name='email' value={email} disabled className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                            </div>
                            <div>
                                <label className="text-gray-600 mb-2 block required">Mobile Number<span className="text-primary">*</span></label>
                                <input type="number" defaultValue={userDetails?.user?.phonenumber} required name='phonenumber' className="block w-full  border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-primary focus:ring-0" />
                            </div>
                        </div>
                    </div>
                    <button className='bg-primary text-white px-4 py-2 rounded mt-5 border border-primary hover:bg-transparent hover:text-primary transition'>Update</button>
                </form>

            </div>

        </DashboardLayout>
    );
};

export default UserProfile;