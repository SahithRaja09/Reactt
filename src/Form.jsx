import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import './Form.css'
import { Link } from "react-router-dom";
const Form = () => {
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", date: "",cpassword:"" ,city:"",phonenumber:"",age:"",gender:"",country:""},
    validationSchema: Yup.object({
      name: Yup.string().min(3, "At least 3 characters").required("Name is Required"),
      email: Yup.string().email("Invalid email Format @example.com").required("Email is Required"),
      password: Yup.string().min(6, "At least 6 characters").required("Password is Required"),
      cpassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Confirm Password doesn't match with Password")
        .required("Confirm password is Required"),
      date: Yup.date().required("Date is Required"),
    
  phonenumber:Yup.string().required("Phno is Required").matches(/^[6-9]\d{9}$/, "Invalid phone number"),
  age: Yup.number().min(1, "Age Must be at least 1 yr").required("Age is Required"),
      gender: Yup.string().required("Gender is Required"),
      country: Yup.string().required("Country is Required"),
    }),
    onSubmit: (values) => 
    {
       localStorage.setItem("formdata",JSON.stringify(values));
       console.log(values);
    }
  });

  return (
  
 <section>
  <h2>Sign Up</h2>
     <form onSubmit={formik.handleSubmit}>
            <div className="container">
        <div className="Form">
          <div className="input-container">
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formik.values.name} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.name && formik.errors.name && <p>{formik.errors.name}</p>}

      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formik.values.email} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}

      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={formik.values.password} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}

      <input type="password" name="cpassword" placeholder="Confirm password" 
      value={formik.values.cpassword} 
      onChange={formik.handleChange}
      onBlur={formik.handleBlur} />
       {formik.touched.cpassword && formik.errors.cpassword && <p>{formik.errors.cpassword}</p>}

      <input 
        type="date" 
        name="date" 
        value={formik.values.date} 
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.date && formik.errors.date && <p>{formik.errors.date}</p>}

      <input type="number" name="phonenumber" placeholder="Phno" value={formik.values.phonenumber}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />

      {formik.touched.phonenumber && formik.errors.phonenumber && <p>{formik.errors.phonenumber}</p>}

      <input type="number" name="age" placeholder="Age" 
      value={formik.values.age}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}/>
      {formik.touched.age && formik.errors.age && <p>{formik.errors.age}</p>}
      
      <div className="genders">
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            onChange={formik.handleChange} 
            checked={formik.values.gender === "male"} 
          /> Male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            onChange={formik.handleChange} 
            checked={formik.values.gender === "female"} 
          /> Female
        </label>
        <label htmlFor="">
        <input 
            type="radio" 
            name="gender" 
            value="others" 
            onChange={formik.handleChange} 
            checked={formik.values.gender === "others"} 
          /> Others
        </label>
      </div>
      {formik.touched.gender && formik.errors.gender && <p>{formik.errors.gender}</p>}

<select name="country" id="Country" value={formik.values.country} onChange={formik.handleChange}>
<option value="">Select Country</option>
<option value="india">India</option>
<option value="usa">USA</option>
<option value="uk">UK</option>
</select>
{formik.touched.country && formik.errors.country && <p>{formik.errors.country}</p>}

      <div className="btn">
      <button type="submit">Submit</button>
      </div>
      </div>
      </div>
      </div>
    </form>
    <Link to="/Login">Login</Link>
 </section>
  );
};

export default Form;
