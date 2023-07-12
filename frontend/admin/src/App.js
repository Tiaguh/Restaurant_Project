import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Requests from './Pages/Requests/Requests'
import Menu from './Pages/Menu/Menu'
import AddItem from './Pages/AddItem/AddItem'
import ManagementItems from './Pages/Management-Items/ManagementItems'
import AlterItems from './Pages/AlterItems/AlterItems'
import UpdateItem from './Pages/UpdateItem/UpdateItem'

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