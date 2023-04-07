import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function MoreCard() {
  const { isLoggedIn } = useContext(AuthContext);

  let navigate = useNavigate();
  let [car, setCar] = useState([]);
  const apiUrl = "http://localhost:8080/dealership";
  const { id } = useParams();

  //load car
  const loadCar = async () => {
    const result = await axios.get(`${apiUrl}/inventory/car/${id}`);
    setCar(result.data);
    console.log(car);
  };

  const deleteCar = async () => {
    await axios.delete(`http://localhost:8080/dealership/inventory/${id}`);
    navigate("/");
  };

  useEffect(() => {
    loadCar();
  }, []);

  return (
    <div id="more-card-container">
      <h3>{car.carName}</h3>
      <img className="more-car-image" src={car.imageUrl} alt={car.carName} />
      <h4>Category:{car.carType}</h4>

      <h4>Price: ${car.carPrice}</h4>
      {isLoggedIn && (
        <Link to={`/editCar/${id}`} className="btn btn-outline-primary mx-2">
          Edit
        </Link>
      )}
      {isLoggedIn && (
        <button onClick={deleteCar} className="btn btn-danger mx-2">
          Sold
        </button>
      )}
    </div>
  );
}
