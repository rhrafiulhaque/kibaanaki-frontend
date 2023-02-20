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
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/product/1' element={<ProductView />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
