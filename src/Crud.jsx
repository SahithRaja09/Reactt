import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './Crud.css'
function Crud() {
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
      date: "",
      phonenumber: "",
      age: "",
      gender: "",
      country: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Name should contain at least 3 characters")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is Required"),
      password: Yup.string()
        .min(6, "At least 6 characters")
        .required("Password is Required"),
      cpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password Confirmation is Required"),
      date: Yup.date().required("DOB is Required"),
      phonenumber: Yup.string()
        .required("Phone Number is Required")
        .matches(/^[6-9]\d{9}$/, "Invalid phone number"),
      age: Yup.number()
        .min(1, "Age must be at least 1 year")
        .required("Age is Required"),
      gender: Yup.string().required("Gender is Required"),
      country: Yup.string().required("Country is Required"),
    }),
    onSubmit: (values) => {
      if (editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex] = values;
        setData(updatedData);
        setEditIndex(null);
      } else {
        setData([...data, values]);
      }
      formik.resetForm();
    },
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    formik.setValues(data[index]);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  return (
    <div className="main">
      <section>
        <h1>Signup Form</h1>
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p>{formik.errors.name}</p>
            )}

            <input
              type="email"
              placeholder="Enter your Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}

            <input
              type="password"
              placeholder="Enter your Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p>{formik.errors.password}</p>
            )}

            <input
              type="password"
              placeholder="Confirm your Password"
              name="cpassword"
              value={formik.values.cpassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.cpassword && formik.errors.cpassword && (
              <p>{formik.errors.cpassword}</p>
            )}

            <input
              type="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.date && formik.errors.date && (
              <p>{formik.errors.date}</p>
            )}

            <input
              type="text"
              placeholder="Enter your Phone Number"
              name="phonenumber"
              value={formik.values.phonenumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber && (
              <p>{formik.errors.phonenumber}</p>
            )}

            <input
              type="number"
              placeholder="Enter your Age"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age && (
              <p>{formik.errors.age}</p>
            )}

            <div className="genders">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formik.values.gender === "Male"}
                  onChange={formik.handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formik.values.gender === "Female"}
                  onChange={formik.handleChange}
                />{" "}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  checked={formik.values.gender === "Others"}
                  onChange={formik.handleChange}
                />{" "}
                Others
              </label>
            </div>
            {formik.touched.gender && formik.errors.gender && (
              <p>{formik.errors.gender}</p>
            )}

            <select
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="Others">Others</option>
            </select>
            {formik.touched.country && formik.errors.country && (
              <p>{formik.errors.country}</p>
            )}

            <div className="btn">
              <button type="submit">
                {editIndex !== null ? "Update" : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="table">
          <table border="2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phonenumber}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.country}</td>
                  <td>
                    <div className="actions">
                    <button onClick={() => handleEdit(index)} className="Edit">Edit</button>
                    <button onClick={() => handleDelete(index)} className="Delete">Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Crud;