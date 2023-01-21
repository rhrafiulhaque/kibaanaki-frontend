import React from 'react';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Navbar from '../Home/Navbar';
import ProductSort from '../Sorting/ProductSort';

const Sorting = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <ProductSort/>
            <Footer/>
        </div>
    );
};

export default Sorting;