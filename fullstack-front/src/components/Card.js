import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function Card({
  carName,
  carPrice,
  carType,
  imageUrl,
  ident,
  onClick,
}) {
  function handleClick() {
    //added
    onClick();
  }

  const deleteCar = async () => {
    await axios.delete(`http://localhost:8080/dealership/inventory/${ident}`);
    handleClick();
  };

  return (
    <div class="car-card">
      <img className="car-image" src={imageUrl} alt={carName} />
      <h4>{carName}</h4>

      <p>${carPrice}</p>
      <Link to={`/more/${ident}`} className="btn btn-primary mx-2">
        More
      </Link>
      <Link to={`/editCar/${ident}`} className="btn btn-outline-primary mx-2">
        Edit
      </Link>
      <button onClick={deleteCar} className="btn btn-danger mx-2">
        Sold
      </button>
    </div>
  );
}
