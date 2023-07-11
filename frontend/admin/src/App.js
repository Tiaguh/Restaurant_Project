import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/home'
import Login from './components/Login/login'
import Requests from "./components/Requests/requests";
import Menu from './components/Menu/menu'
import AddItem from './components/AddItem/addItem';
import ManagementItems from "./components/Management-Items/managementItems";
import AlterItems from "./components/AlterItems/alterItems";
import UpdateItem from "./components/UpdateItem/updateItem";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/management-items" element={<ManagementItems />} />
          <Route path="/alter-items" element={<AlterItems />} />
          <Route path="/update-item/:item_id" element={<UpdateItem />} />
        </Routes>
      </Router>

      <ToastContainer />

    </div>
  );
}