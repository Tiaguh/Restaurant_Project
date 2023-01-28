import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/home'
import Requests from "./components/Requests/requests";
import Chat from "./components/Chat/chat";
import Menu from './components/Menu/menu'
import AddItem from './components/AddItem/addItem';
import Update from "./components/Update/update";
import DeleteItem from "./components/DeleteItem/deleteItem";
import ManagementItems from "./components/Management-Items/managementItems";


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/update-item" element={<Update />} />
          <Route path="/management-items" element={<ManagementItems />} />
          <Route path="/delete-item" element={<DeleteItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
