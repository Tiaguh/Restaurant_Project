import HomePage from './Pages/HomePage/HomePage';
import CreateAccount from './Pages/CreateAccount/CreateAccount'
import Login from './Pages/Login/Login'
import Menu from './Pages/Menu/Menu';
import Cart from './Pages/Cart/cart';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path='/login' element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <ToastContainer />

    </Router>
  );
}