import React from "react";

export default function Card({ carName, carPrice, carType, imageUrl }) {
  return (
    <div>
      <p>{carName}</p>
      <p>{carType}</p>
      <img src={imageUrl} alt={carName} />
      <p>{carPrice}</p>
      <button className="btn btn-outline-primary mx-2">Edit</button>
      <button className="btn btn-danger mx-2">Delete</button>
    </div>
  );
}
