import React from "react";
import { Link } from "react-router-dom";

export default function Card({ carName, carPrice, carType, imageUrl, ident }) {
  return (
    <div class="car-card">
      <p>
        {carName}
        id:{ident}
      </p>
      <p>Category:{carType}</p>
      <img src={imageUrl} alt={carName} />
      <p>${carPrice}</p>
      <Link to={`/editCar/${ident}`} className="btn btn-outline-primary mx-2">
        Edit
      </Link>
      <button className="btn btn-danger mx-2">Sold</button>
    </div>
  );
}
