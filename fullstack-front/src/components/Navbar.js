import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "bootstrap";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      carCategory: "",
      filter: "",
    },
    //submit form
    onSubmit: (values) => {
      console.log("hey");
    },
  });

  return (
    <div>
      <nav class="navbar bg-dark" data-bs-theme="dark">
        <div class="container-lg">
          <div class="small-nav">
            <Link className="button" to="login">
              Login
            </Link>
            <Link className="button" to="/">
              Home
            </Link>
            {isLoggedIn && (
              <Link className="addbutton" to="add">
                Add Vehicle
              </Link>
            )}
          </div>

          <form onSubmit={formik.handleSubmit} class="d-flex" role="search">
            <label id="price-label" for="filter" className="button">
              Price
            </label>
            <select
              name="filter"
              as="select"
              value={formik.values.filter}
              onChange={formik.handleChange}
            >
              <option value="10000000">select</option>
              <option value="10000">10,000</option>
              <option value="20000">20,000</option>
              <option value="30000">30,000</option>
              <option value="40000">40,000</option>
              <option value="50000">50,000</option>
              <option value="60000">60,000</option>
              <option value="70000">70,000</option>
              <option value="80000">80,000</option>
            </select>
            <input
              class="form-control me-2"
              type="text"
              placeholder="Category"
              name="carCategory"
              value={formik.values.carCategory}
              onChange={formik.handleChange}
              aria-label="Search"
            ></input>
            <Link
              to={`/inventory/${formik.values.carCategory}/${formik.values.filter}`}
              class="btn btn-success"
              type="submit"
            >
              Search
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}
