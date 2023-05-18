import React from 'react';
import AdminDashboardLayout from '../../Dashboard/AdminDashboardLayout';

const ProductList = () => {
    return (
        <AdminDashboardLayout>

            <div className='col-span-9 '>
                <h1 className='text-center font-bold py-8 text-4xl border-gray-200 border-2 text-gray-700 whitespace-nowrap'>Product List</h1>
                <table className="w-full">

                    <thead className='bg-gray-50 border-b-2 border-gray-200'>
                        <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'></th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Product Name</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Job</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>

                        <tr className='bg-white'>
                            <th>1</th>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Cy Ganderton</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Quality Control Specialist</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Blue</td>
                        </tr>

                        <tr>
                            <th>2</th>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Hart Hagerty</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Desktop Support Technician</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Purple</td>
                        </tr>

                        <tr>
                            <th>3</th>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Brice Swyre</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Tax Accountant</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Red</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </AdminDashboardLayout>
    );
};

export default ProductList;