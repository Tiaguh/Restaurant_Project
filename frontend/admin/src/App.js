import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Management from './components/Management/management'
import Requests from "./components/Requests/requests";
import Chat from "./components/Chat/chat";
import AddItem from './components/AddItem/addItem';
import Menu from './components/Menu/menu'
import Update from "./components/Update/update";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Management />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
