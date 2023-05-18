import logo from './logo.svg';
import './App.css';
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';
import Header from './components/Home/Header';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import ProductView from './components/pages/ProductView';
import Register from './components/pages/Register';
import UserAccount from './Dashboard/UserDashboard/UserAccount';
import UserProfile from './Dashboard/UserDashboard/UserProfile';
import ProductForm from './components/test1';
import RequireAuth from './Utilities/RequireAuth';
import AdminLoginForm from './components/Login/AdminLogin/AdminLoginForm';
import NotFound from './components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddProduct from './Dashboard/AdminDashboard/AddProduct';
import RequireAdmin from './Utilities/RequireAdmin';
import ComingSoon from './components/NotFound/ComingSoon';
import ProductList from './components/ProductList/ProductList';
import AdminDashboard from './Dashboard/AdminDashboard/AdminDashboard';
import NotAdmin from './components/Login/AdminLogin/NotAdmin';



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
        <Route path='/admin' element={<NotAdmin><AdminLoginForm /></NotAdmin>} />
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
        <Route path='/comingsoon' element={<ComingSoon />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
