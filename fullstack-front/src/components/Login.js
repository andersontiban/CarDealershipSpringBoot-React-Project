import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export default function Login() {
  const { setIsLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();

  //Formik Logics
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .test("username", "Invalid username", (value) => value === "admin123")
        .required("Input required"),
      password: Yup.string()
        .test("password", "Invalid password", (value) => value === "car123")
        .required("Input required"),
    }),

    //submit form
    onSubmit: (values) => {
      setIsLoggedIn(true);
      navigate("/");
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 id="header" className="text-center m-4">
            Login
          </h2>
          <div className="mb-3">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="username" className="form-label">
                {formik.touched.username && formik.errors.username ? (
                  <div class="formik-errors">{formik.errors.username}</div>
                ) : (
                  "Username"
                )}
              </label>
              <input
                type="text"
                placeholder="Enter username:"
                name="username"
                onBlur={formik.handleBlur}
                value={formik.values.username}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <label htmlFor="password" className="form-label">
                {formik.touched.password && formik.errors.password ? (
                  <div class="formik-errors">{formik.errors.password}</div>
                ) : (
                  "Password"
                )}
              </label>
              <input
                type="text"
                name="password"
                placeholder="Enter password:"
                onBlur={formik.handleBlur}
                value={formik.values.password}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <button type="submit" className="btn btn-outline-primary">
                Login
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
