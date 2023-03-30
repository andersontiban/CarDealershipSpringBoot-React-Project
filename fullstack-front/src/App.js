import "./App.css";
import Inventory from "./components/Inventory";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCar from "./components/AddCar";
import EditCar from "./components/EditCar";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import MoreCard from "./components/MoreCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<Inventory />} />
            <Route exact path="/add" element={<AddCar />} />
            <Route exact path="/editCar/:id" element={<EditCar />} />
            <Route exact path="/more/:id" element={<MoreCard />} />
            <Route exact path="/inventory/:carType" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
