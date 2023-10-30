import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faBoxTissue, faBoxes, faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardLayout from "../DashboardLayout";

const UserDashboard = () => {

    return (
        <DashboardLayout>
            <div className='col-span-9'>

                <div className="grid grid-cols-3 gap-8 mt-10">
                    <div className="shadow p-20 text-center">
                        <FontAwesomeIcon className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-red-400 hover:text-white hover:bg-primary duration-300 transition  " icon={faBoxes} />
                        <h1 className="text-2xl">23</h1>
                        <p className="text-xl">Orders</p>
                    </div>

                    <div className="shadow p-20 text-center">
                        <FontAwesomeIcon className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-red-400 hover:text-white hover:bg-primary duration-300 transition  " icon={faDollar} />
                        <h1 className="text-2xl">242k</h1>
                        <p className="text-xl">Total Spend</p>
                    </div>

                    <div className="shadow p-20 text-center">
                        <FontAwesomeIcon className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-red-400 hover:text-white hover:bg-primary duration-300 transition  " icon={faBoxTissue} />
                        <h1 className="text-2xl">23</h1>
                        <p className="text-xl">Products Bought </p>
                    </div>

                    <div className="shadow p-20 text-center">
                        <FontAwesomeIcon className="text-7xl border rounded-full border-primary px-5 py-4 my-4 text-red-400 hover:text-white hover:bg-primary duration-300 transition  " icon={faStackOverflow} />
                        <h1 className="text-2xl">23</h1>
                        <p className="text-xl">Orders</p>
                    </div>

                </div>

            </div>
        </DashboardLayout>
    );
};

export default UserDashboard;