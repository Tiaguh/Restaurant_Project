import HomePage from './components/HomePage/homePage';
import Menu from './components/Menu/menu';
import Login from './components/Login/login'
import CreateAccount from './components/CreateAccount/createAccount'
import Cart from './components/Cart/cart';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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

export default App;
