import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext';

import HomePage from './Pages/HomePage/HomePage';
import CreateAccount from './Pages/CreateAccount/CreateAccount'
import Login from './Pages/Login/Login'
import Menu from './Pages/Menu/Menu';
import Cart from './Pages/Cart/Cart';
import Error from './Pages/Error/Error';

import ProtectedRouter from './protected'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Router>

      <UserProvider>

        <Routes>

          <Route element={<ProtectedRouter />}>
            <Route path="/cart" element={<Cart />} />
          </Route>


          <Route path="/" element={<HomePage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="*" element={<Error />} />

        </Routes>

      </UserProvider>
      <ToastContainer />

    </Router>
  );
}