
const OrderPdf = () => {
    const leftStyle = {
        clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
    };
    const rightStyle = {
        clipPath: 'polygon(22% 0, 100% 0%, 100% 100%, 0 100%)'
    };

    return (
        <div className="container mx-auto mt-[20px]">
            <div className="flex ">
                <div className="bg-slate-900 w-1/2  text-white py-8 px-8 " style={leftStyle} >
                    <h1 className="uppercase text-4xl ">KinbaaNaki</h1>
                    <p className="text-xs">Endless Choices, One Destination</p>
                </div>
                <div className="bg-primary w-1/2 text-white py-8 px-8 text-right" style={rightStyle}>
                    <h1 className="uppercase font-semibold text-3xl">Invoice</h1>
                    <p>Invoice Id: 34jd83aoAkoeui</p>
                    <p>Order Date: 07 Oct 2023</p>
                </div>
            </div>

            <div className="my-8 flex justify-between">
                <div className="space-y-2">
                    <h1 className="uppercase text-primary font-medium">Invoice To</h1>
                    <p className="uppercase font-bold">RH Rafiul Haque</p>
                    <p>Phone: +999783223</p>
                    <p>Email: rh@gmail.com</p>
                    <p>Address: Mohakhali Dhaka</p>
                </div>

                <div className="mt-12">
                    <h1>Payment Method</h1>
                    <p>Type: Online</p>
                    <p>Account Name: RH Rafiul Haque</p>
                </div>

            </div>

            <div>

                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Silver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">
                                    White
                                </td>
                                <td class="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td class="px-6 py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">
                                    Black
                                </td>
                                <td class="px-6 py-4">
                                    Accessories
                                </td>
                                <td class="px-6 py-4">
                                    $99
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <td class="px-6 py-4">
                                </td>
                                <td class="px-6 py-4">
                                </td>
                                <td class="px-6 py-4 justify-end flex">
                                    <div> <h1>Subtotal: </h1>
                                        <h1>Discount:</h1>
                                        <h1>Tax: </h1>
                                        <h1 className="font-bold">Total: </h1>
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                    <h1>$3000</h1>
                                    <h1> $0.00</h1>
                                    <h1>$0.00</h1>
                                    <h1 className="font-bold"> $3000</h1>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>

        </div>
    );
};

export default OrderPdf;