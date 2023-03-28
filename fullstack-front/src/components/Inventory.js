import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

export default function Inventory() {
  const apiUrl = "http://localhost:8080/dealership";
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    const result = await axios.get(`${apiUrl}/inventory`);
    setCars(result.data);
  };

  return (
    <div>
      {cars.map((car) => (
        <Card
          carName={car.carName}
          carPrice={car.carPrice}
          carType={car.carType}
          imageUrl={car.imageUrl}
          ident={car.id}
        />
      ))}
    </div>
  );
}
