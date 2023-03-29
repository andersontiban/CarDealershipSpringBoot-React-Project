import "./App.css";
import Inventory from "./components/Inventory";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inventory />} />
          <Route exact path="/add" element={<AddCar />} />
          <Route exact path="/editCar/:id" element={<EditCar />} />
          <Route exact path="/inventory/:carType" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
