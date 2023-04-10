import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

export default function Search() {
  //get param
  const { carType } = useParams();
  const { price } = useParams();

  const apiUrl = "http://localhost:8080/dealership";
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    const result = await axios.get(`${apiUrl}/inventory/${carType}/${price}`);
    console.log(result.data);
    console.log(price);
    setCars(result.data);
  };

  return (
    <div>
      <h1 id="header">{carType} Inventory</h1>
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
