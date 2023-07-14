import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddProduct from './Dashboard/AdminDashboard/AddProduct';
import AdminDashboard from './Dashboard/AdminDashboard/AdminDashboard';
import UserAccount from './Dashboard/UserDashboard/UserAccount';
import UserProfile from './Dashboard/UserDashboard/UserProfile';
import RequireAdmin from './Utilities/RequireAdmin';
import RequireAuth from './Utilities/RequireAuth';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Navbar from './components/Home/Navbar';
import AdminLoginForm from './components/Login/AdminLogin/AdminLoginForm';
import ComingSoon from './components/NotFound/ComingSoon';
import NotFound from './components/NotFound/NotFound';
import ProductList from './components/ProductList/ProductList';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import ProductView from './components/pages/ProductView';
import Register from './components/pages/Register';
import Sorting from './components/pages/Sorting';
import ProductForm from './components/test1';



function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/useraccount' element={<UserAccount />} />
        <Route path='/profile' element={<RequireAuth>
          <UserProfile />
        </RequireAuth>} />
        <Route path='/product/:id' element={<ProductView />} />
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
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
