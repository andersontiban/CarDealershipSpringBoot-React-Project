import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Carousel from "./Carousel";

export default function Inventory() {
  const apiUrl = "http://localhost:8080/dealership";
  const [cars, setCars] = useState([]);
  const [counter, setCounter] = useState(0); //added
  function handleClick() {
    //passed to child component
    //added
    setCounter(counter + 1);
    loadCars();
  }

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    const result = await axios.get(`${apiUrl}/inventory`);
    console.log(result.data);
    setCars(result.data);
  };

  return (
    <div id="card-container">
      <h1 id="header">Inventory</h1>
      {cars.map((car) => (
        <Card
          carName={car.carName}
          carPrice={car.carPrice}
          carType={car.carType}
          imageUrl={car.imageUrl}
          ident={car.id}
          onClick={handleClick} //added
        />
      ))}
    </div>
  );
}
