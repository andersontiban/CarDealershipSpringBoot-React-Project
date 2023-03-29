import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

export default function Search() {
  //get param
  const { carType } = useParams();

  const apiUrl = "http://localhost:8080/dealership";
  const [cars, setCars] = useState([]);

  useEffect(() => {
    loadCategory();
  }, [cars]);

  const loadCategory = async () => {
    const result = await axios.get(`${apiUrl}/inventory/${carType}`);
    console.log(result.data);
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
