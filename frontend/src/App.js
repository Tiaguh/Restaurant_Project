import HomePage from './components/HomePage/homePage';
import Menu from './components/Menu/menu';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
