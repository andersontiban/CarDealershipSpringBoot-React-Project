import React from "react";
import { useFormik } from "formik";

export default function AddCar() {
  //Formik Logics
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      type: "",
      url: "",
    },

    //submit form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Car</h2>
          <div className="mb-3">
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="name" className="form-label">
                Car Name
              </label>
              <input
                type="text"
                placeholder="Enter car name:"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <label htmlFor="price" className="form-label">
                Car Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="Enter car price:"
                value={formik.values.price}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <label htmlFor="type" className="form-label">
                Car Type
              </label>
              <input
                type="text"
                name="type"
                placeholder="Enter car category:"
                value={formik.values.type}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <label htmlFor="url" className="form-label">
                Image Url
              </label>
              <input
                type="text"
                name="url"
                placeholder="Enter url:"
                value={formik.values.url}
                onChange={formik.handleChange}
                className="form-control"
              ></input>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <button className="btn btn-outline-danger mx-2">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
