import Loading from '../../../components/Loading/Loading';
import { useGetAllUserQuery } from '../../../features/auth/authApi';
import AdminDashboardLayout from '../../AdminDashboardLayout';



const CustomerList = () => {
    const { data: users, isLoading, isError, error } = useGetAllUserQuery()


    if (isLoading) {
        return <Loading />
    }

    const userList = users.user.filter((u) => u.role !== 'Admin')
    return (
        <AdminDashboardLayout>

            <div className='col-span-9 '>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Customer List</h1>
                <table className="w-full">

                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Sl No</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Email</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Role</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Options</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>

                        {
                            userList.map((user, i) => (
                                <tr className='bg-white'>
                                    <th>{i + 1}</th>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{user.name}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{user.email}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>{user.role.toUpperCase()}</td>
                                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap'></td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </AdminDashboardLayout>
    );
};

export default CustomerList;