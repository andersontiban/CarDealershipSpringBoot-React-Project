import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Card({
  carName,
  carPrice,
  carType,
  imageUrl,
  ident,
  onClick,
}) {
  function handleClick() {
    onClick();
  }

  const deleteCar = async () => {
    await axios.delete(`http://localhost:8080/dealership/inventory/${ident}`);
    handleClick();
  };

  return (
    <div className="car-card">
      <img className="car-image" src={imageUrl} alt={carName} />
      <h4 id="card-name">{carName}</h4>

      <p>${carPrice}</p>
      <Link to={`/more/${ident}`} className="btn btn-dark mx-2">
        More
      </Link>
    </div>
  );
}
