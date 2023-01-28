import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/home'
import Requests from "./components/Requests/requests";
import Chat from "./components/Chat/chat";
import Menu from './components/Menu/menu'
import AddItem from './components/AddItem/addItem';
import ManagementItems from "./components/Management-Items/managementItems";
import AlterItems from "./components/AlterItems/alterItems";


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
          <Route path="/management-items" element={<ManagementItems />} />
          <Route path="/alter-items" element={<AlterItems />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
