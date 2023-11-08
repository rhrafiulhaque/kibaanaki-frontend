import { useSelector } from 'react-redux';
import Categories from '../Home/Categories';
import DownloadApp from '../Home/DownloadApp';
import Features from '../Home/Features';
import ProductCarousel from '../Home/ProductCarousel';
import TopNewArrival from '../Home/TopNewArrival';
import TopRanking from '../Home/TopRanking';
import ProductSort from '../Sorting/ProductSort';

const Home = () => {
    const searchKeyword = useSelector((state) => state.filter.searchKeyword);

    if (searchKeyword === '') {
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
    } else if (searchKeyword) {
        return (
            <div>
                <ProductSort />
            </div>
        )
    }
};

export default Home;