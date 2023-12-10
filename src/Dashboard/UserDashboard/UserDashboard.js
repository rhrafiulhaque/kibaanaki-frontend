import { faBoxTissue, faBoxes, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading/Loading";
import { useGetOrderListQuery } from "../../features/order/orderApi";
import DashboardLayout from "../DashboardLayout";

const UserDashboard = () => {
    const user = useSelector((state) => state.auth.userDetails);
    const { data: orderList, isLoading } = useGetOrderListQuery(user.email)
    if (isLoading) {
        return <Loading />
    }
    if (!orderList || orderList.length === 0) {
        return <p>No orders found.</p>;
    }

    const calculateTotalPrice = (orderList) => {
        let totalPrice = 0;

        orderList.forEach(order => {
            if (order.products && order.products.length > 0) {
                order.products.forEach(product => {
                    totalPrice += product.price;
                });
            }
        });

        return totalPrice;
    }


    const calculateTotalProductCount = (orderList) => {
        let totalProducts = 0;

        orderList.forEach(order => {
            if (order.products && order.products.length > 0) {
                totalProducts += order.products.length; // Counting products in the transaction
            }
        });

        return totalProducts;
    }

    const totalProductPrice = calculateTotalPrice(orderList?.data);
    const totalProduct = calculateTotalProductCount(orderList?.data);


    return (
        <DashboardLayout>
            <div className='col-span-9'>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-10">
                    <div className="shadow p-10 text-center">
                        <FontAwesomeIcon className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-red-400 hover:text-white hover:bg-primary duration-300 transition  " icon={faBoxes} />
                        <h1 className="text-2xl font-bold">{orderList?.data?.length}</h1>
                        <p className="text-xl">Orders</p>
                    </div>

                    <div className="shadow p-10 text-center">
                        <FontAwesomeIcon className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-red-400 hover:text-white hover:bg-primary duration-300 transition  " icon={faDollar} />
                        <h1 className="text-2xl font-bold">${totalProductPrice}</h1>
                        <p className="text-xl">Total Spend</p>
                    </div>

                    <div className="shadow p-10 text-center">
                        <FontAwesomeIcon className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-red-400 hover:text-white hover:bg-primary duration-300 transition  " icon={faBoxTissue} />
                        <h1 className="text-2xl font-bold">{totalProduct}</h1>
                        <p className="text-xl">Products Bought </p>
                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default UserDashboard;