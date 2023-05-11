import HomePage from './Pages/HomePage/HomePage';
import Menu from './Pages/Menu/menu';
import Login from './Pages/Login/login'
import CreateAccount from './Pages/CreateAccount/createAccount'
import Cart from './Pages/Cart/cart';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path='/login' element={<Login />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}