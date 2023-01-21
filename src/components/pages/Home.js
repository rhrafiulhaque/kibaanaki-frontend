import React from 'react';
import AdvBanner from '../Home/AdvBanner';
import Categories from '../Home/Categories';
import DownloadApp from '../Home/DownloadApp';
import Features from '../Home/Features';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Navbar from '../Home/Navbar';
import ProductCarousel from '../Home/ProductCarousel';
import TopNewArrival from '../Home/TopNewArrival';
import TopRanking from '../Home/TopRanking';

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <ProductCarousel/>
            <Features/>
            <Categories/>
            <TopRanking/>
            <TopNewArrival/>
            <DownloadApp/>
            <Footer/>
        </div>
    );
};

export default Home;