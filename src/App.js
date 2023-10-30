import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './Dashboard/AdminDashboard/AddProduct';
import AdminDashboard from './Dashboard/AdminDashboard/AdminDashboard';
import UserAddress from './Dashboard/UserDashboard/UserAddress';
import UserDashboard from './Dashboard/UserDashboard/UserDashboard';
import UserProfile from './Dashboard/UserDashboard/UserProfile';
import useAuthCheck from './Hooks/useAuthCheck';
import RequireAdmin from './Utilities/RequireAdmin';
import RequireAuth from './Utilities/RequireAuth';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Navbar from './components/Home/Navbar';
import Loading from './components/Loading/Loading';
import AdminLoginForm from './components/Login/AdminLogin/AdminLoginForm';
import ComingSoon from './components/NotFound/ComingSoon';
import NotFound from './components/NotFound/NotFound';
import OrderComplete from './components/Orders/OrderComplete';
import OrderDetails from './components/Orders/OrderDetails';
import OrderList from './components/Orders/OrderList';
import ProductList from './components/ProductList/ProductList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import ProductView from './components/pages/ProductView';
import Register from './components/pages/Register';
import Sorting from './components/pages/Sorting';
import ProductForm from './components/test1';



function App() {
  const authChecked = useAuthCheck();
  return !authChecked ? <Loading /> :
    (
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile/:email' element={<RequireAuth>
            <UserProfile />
          </RequireAuth>} />
          <Route path='/user-address/' element={<RequireAuth>
            <UserAddress />
          </RequireAuth>} />
          <Route path='/getorderlist/' element={<RequireAuth>
            <OrderList />
          </RequireAuth>} />
          <Route path='/userdashboard/:email' element={<RequireAuth>
            <UserDashboard />
          </RequireAuth>} />
          <Route path='/getorderdetails/:id' element={<RequireAuth>
            <OrderDetails />
          </RequireAuth>} />
          <Route path='/checkout' element={<RequireAuth><Checkout /></RequireAuth>} />
          <Route path='/payment-success' element={<RequireAuth><OrderComplete /></RequireAuth>} />

          <Route path='/products/:id' element={<ProductView />} />
          <Route path='/admin' element={<AdminLoginForm />} />
          <Route path='/admin/dashboard' element={<RequireAdmin>
            <AdminDashboard />
          </RequireAdmin>} />
          <Route path='/admin/addproduct' element={<RequireAdmin>
            <AddProduct />
          </RequireAdmin>} />
          <Route path='/admin/productlist' element={<RequireAdmin>
            <ProductList />
          </RequireAdmin>} />
          <Route path='/test' element={<ProductForm />} />
          <Route path='/sortedproduct' element={<Sorting />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/cart' element={<ShoppingCart />} />

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    );
}

export default App;
