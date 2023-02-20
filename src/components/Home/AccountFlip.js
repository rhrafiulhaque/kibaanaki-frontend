import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AccountFlip = () => {
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/');
    };

    return (
        <div class="absolute w-28 right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
                <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/profile'} role="menuitem" tabindex="-1" id="menu-item-0">My Profile </Link>
                <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/cart'} role="menuitem" tabindex="-1" id="menu-item-1">My Cart</Link>
                <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/login'} role="menuitem" tabindex="-1" id="menu-item-2">Login</Link>
                <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" to={'/register'} role="menuitem" tabindex="-1" id="menu-item-2">Register</Link>
                <Link class="text-gray-700 block px-4 py-2 text-sm hover:text-primary transition" role="menuitem" tabindex="-1" id="menu-item-2" onClick={logout}>Logout</Link>

            </div>
        </div>




    );
};

export default AccountFlip;