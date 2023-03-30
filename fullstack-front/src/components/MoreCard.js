import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function MoreCard() {
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
    <div>
      <h3>MoreCard {id}</h3>
      <img className="car-image" src={car.imageUrl} alt={car.carName} />
      <h4>{car.carName}</h4>
      <p>Category:{car.carType}</p>

      <p>${car.carPrice}</p>
      <Link to={`/editCar/${id}`} className="btn btn-outline-primary mx-2">
        Edit
      </Link>
      <button onClick={deleteCar} className="btn btn-danger mx-2">
        Sold
      </button>
    </div>
  );
}
