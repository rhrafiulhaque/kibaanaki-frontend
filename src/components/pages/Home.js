import Categories from '../Home/Categories';
import DownloadApp from '../Home/DownloadApp';
import Features from '../Home/Features';
import ProductCarousel from '../Home/ProductCarousel';
import TopNewArrival from '../Home/TopNewArrival';
import TopRanking from '../Home/TopRanking';

const Home = () => {

    return (
        <div>
            <ProductCarousel />
            <Features />
            <Categories />
            <TopRanking />
            <TopNewArrival />
            <DownloadApp />
        </div>
    );
};

export default Home;