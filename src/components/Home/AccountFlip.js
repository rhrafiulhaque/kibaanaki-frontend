import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import useAdmin from '../../Hooks/useAdmin';
import { removeAuth } from '../../features/auth/authSlice';

const AccountFlip = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.userDetails);
    const [admin] = useAdmin(user?.email);
    const dispatch = useDispatch()
    // if (admin) {
    //     console.log("He is admin");
    // } else {
    //     console.log("He is not admin");
    // }
    const logout = () => {
        dispatch(removeAuth())
        localStorage.removeItem('accessToken');
        navigate('/');
    };

    return (
        <div class="absolute w-28 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                {
                    (user && !admin) && <>
                        <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={`/userdashboard/${user?.email}`} role="menuitem" tabindex="-1" id="menu-item-0">My Profile </Link>
                        <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/cart'} role="menuitem" tabindex="-1" id="menu-item-1">My Cart</Link>
                    </>
                }
                {
                    admin && <>
                        <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/admin/dashboard'} role="menuitem" tabindex="-1" id="menu-item-0">My Profile </Link>
                        <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/cart'} role="menuitem" tabindex="-1" id="menu-item-1">My Cart</Link>
                    </>
                }
                {!user && <>
                    <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/login'} role="menuitem" tabindex="-1" id="menu-item-2">Login</Link>
                    <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/register'} role="menuitem" tabindex="-1" id="menu-item-2">Register</Link>
                </>

                }

                {(user || admin) && <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" role="menuitem" tabindex="-1" id="menu-item-2" onClick={logout}>Logout</Link>}

            </div>
        </div>




    );
};

export default AccountFlip;