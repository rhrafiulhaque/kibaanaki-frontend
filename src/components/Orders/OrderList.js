import { useSelector } from 'react-redux';
import DashboardLayout from '../../Dashboard/DashboardLayout';
import { useGetOrderListQuery } from '../../features/order/orderApi';
import Loading from '../Loading/Loading';

const OrderList = () => {
    const user = useSelector((state) => state.auth.userDetails);
    console.log('user email ', user.email)
    const { data: orderList, isLoading } = useGetOrderListQuery(user?.email)
    console.log(orderList)
    if (isLoading) {
        return <Loading />
    }
    return (
        <DashboardLayout>
            {/* {
                orderList.map((order) => <p>hello</p>)
            } */}
        </DashboardLayout>
    );
};

export default OrderList;