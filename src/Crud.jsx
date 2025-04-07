import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Snackbar } from "@mui/material";
import "./Crud.css";

function Crud() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [toast, setToast] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setData(JSON.parse(storedData));
      setFilteredData(JSON.parse(storedData));
    }
  }, []);

  const saveToLocalStorage = (updatedData) => {
    localStorage.setItem("userData", JSON.stringify(updatedData));
  };

  const handleToastClose = () => {
    setToast({ ...toast, open: false });
  };

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
        .required("Confirm Password is Required"),
      date: Yup.date()
        .max(new Date(), "Date must be in the past")
        .required("DOB is Required"),
      phonenumber: Yup.string()
        .required("Phone Number is Required")
        .matches(/^[6-9]\d{9}$/, "Invalid phone number"),
      age: Yup.number()
        .min(1, "Age must be at least 1 year")
        .required("Age is Required"),
      gender: Yup.string().required("Gender is Required"),
      country: Yup.string().required("Country is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      if (editIndex !== null) {
        const updatedData = [...data];
        updatedData[editIndex] = values;
        setData(updatedData);
        setFilteredData(updatedData);
        saveToLocalStorage(updatedData);
        setEditIndex(null);
        setToast({
          open: true,
          message: "User updated successfully!",
          severity: "success",
        });
      } else {
        const updatedData = [...data, values];
        setData(updatedData);
        setFilteredData(updatedData);
        saveToLocalStorage(updatedData);
        setToast({
          open: true,
          message: "User added successfully!",
          severity: "success",
        });
      }
      resetForm();
    },
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    formik.setValues(data[index]);
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    setFilteredData(updatedData);
    saveToLocalStorage(updatedData);
    setToast({
      open: true,
      message: "User deleted successfully!",
      severity: "info",
    });
  };

  const handleSubmitClick = () => {
    formik.handleSubmit();
    setTimeout(() => {
      if (!formik.isValid && formik.submitCount > 0) {
        setToast({
          open: true,
          message: "Form submission failed. Please check the fields.",
          severity: "error",
        });
      }
    }, 0);
  };

  const handleName = (e) => {
    const filterName = e.target.value.toLowerCase();
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(filterName)
    );
    setFilteredData(filtered);
  };

  const handleEmail = (e) => {
    const filterEmail = e.target.value;
    const filtered = data.filter((item) =>
      item.email.includes(filterEmail)
    );
    setFilteredData(filtered);
  };

  const handlePhoneNumber = (e) => {
    const filterPhoneNumber = e.target.value;
    const filtered = data.filter((item) =>
      item.phonenumber.includes(filterPhoneNumber)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="main">
      <section>
        <h1>Signup Form</h1>
        <div className="form">
          <form onSubmit={formik.handleSubmit}>
            <label>First Name</label>
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

           <label>Email</label>
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
           <label>Password</label>
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
            <label>Confirm Password</label>
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
              
            <label>Date</label>
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
            
            <label>Phone Number</label>
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
           
           <label>Age</label>
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
       
            <label>Gender</label>       
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

            <label>Country</label>
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
              <button type="button" onClick={handleSubmitClick}>
                {editIndex !== null ? "Update" : "Submit"}
              </button>
              {editIndex !== null && (
                <button
                  type="button"
                  onClick={() => {
                    formik.resetForm();
                    setEditIndex(null);
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <Snackbar
          open={toast.open}
          autoHideDuration={3000}
          onClose={handleToastClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          sx={{
            "& .MuiSnackbarContent-root": {
              backgroundColor:
                toast.severity === "success"
                  ? "green"
                  : toast.severity === "error"
                  ? "red"
                  : toast.severity === "info"
                  ? "#1976d2"
                  : "orange",
              color: "#fff",
              fontWeight: "bold",
              fontSize: "16px",
              justifyContent: "center",
            },
          }}
          message={toast.message}
        />

        <div className="input-fields">
          <input
            type="text"
            placeholder="Search Name"
            onChange={handleName}
          />
          <input
            type="text"
            placeholder="Search Email"
            onChange={handleEmail}
          />
          <input
            type="text"
            placeholder="Search Phone Number"
            onChange={handlePhoneNumber}
          />

          <button type="submit">Submit</button>
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
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.email}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phonenumber}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.country}</td>
                    <td>
                      <div className="actions">
                        <button
                          onClick={() => handleEdit(index)}
                          className="Edit"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="Delete"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
export default Crud;