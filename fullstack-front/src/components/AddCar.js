import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";

export default function AddCar() {
  let navigate = useNavigate();

  //Formik Logics
  const formik = useFormik({
    initialValues: {
      carName: "",
      carPrice: "",
      carType: "",
      imageUrl: "",
    },
    validationSchema: Yup.object({
      carName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Input required"),
      carPrice: Yup.number()
        .max(1000000, "Must be 7 digits or less")
        .required("Input required"),
      carType: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Input required"),
      imageUrl: Yup.string()
        .max(100, "Must be 20 characters or less")
        .required("Input required"),
    }),

    //submit form
    onSubmit: (values) => {
      console.log(values);
      fetch("http://localhost:8080/dealership/car", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }).then(() => {
        navigate("/");
      });
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Car</h2>
          <div className="mb-3">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="carName" className="form-label">
                {formik.touched.carName && formik.errors.carName ? (
                  <div class="formik-errors">{formik.errors.carName}</div>
                ) : (
                  "Car Name"
                )}
              </label>
              <input
                type="text"
                placeholder="Enter car name:"
                name="carName"
                onBlur={formik.handleBlur}
                value={formik.values.carName}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <label htmlFor="carPrice" className="form-label">
                {formik.touched.carPrice && formik.errors.carPrice ? (
                  <div class="formik-errors">Must enter numbers</div>
                ) : (
                  "Car Price"
                )}
              </label>
              <input
                type="number"
                name="carPrice"
                placeholder="Enter car price:"
                onBlur={formik.handleBlur}
                value={formik.values.carPrice}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <label htmlFor="carType" className="form-label">
                {formik.touched.carType && formik.errors.carType ? (
                  <div class="formik-errors">{formik.errors.carType}</div>
                ) : (
                  "Car Type"
                )}
              </label>
              <input
                type="text"
                name="carType"
                placeholder="Enter car category:"
                onBlur={formik.handleBlur}
                value={formik.values.carType}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <label htmlFor="imageUrl" className="form-label">
                {formik.touched.imageUrl && formik.errors.imageUrl ? (
                  <div class="formik-errors">{formik.errors.imageUrl}</div>
                ) : (
                  "Image URL"
                )}
              </label>
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter url:"
                onBlur={formik.handleBlur}
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
