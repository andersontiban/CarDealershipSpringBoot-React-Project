import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "bootstrap";

export default function Navbar() {
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      carCategory: "",
    },
    //submit form
    onSubmit: (values) => {
      console.log(values.carCategory);
    },
  });

  return (
    <div>
      <nav class="navbar bg-dark" data-bs-theme="dark">
        <div class="container-lg">
          <div class="small-nav">
            <Link className="button" to="/">
              Home
            </Link>
            <Link className="addbutton" to="add">
              Add Vehicle
            </Link>
          </div>

          <form onSubmit={formik.handleSubmit} class="d-flex" role="search">
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
              to={`/inventory/${formik.values.carCategory}`}
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
