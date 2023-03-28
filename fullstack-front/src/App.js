import "./App.css";
import Inventory from "./components/Inventory";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "./components/AddCar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inventory />} />
          <Route exact path="/add" element={<AddCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
