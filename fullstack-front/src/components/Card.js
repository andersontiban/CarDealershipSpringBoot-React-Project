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

      <p>{carType}</p>
      <Link to={`/more/${ident}`} className="btn btn-dark mx-2">
        More
      </Link>
    </div>
  );
}
