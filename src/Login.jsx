import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Form.css"
import "./Login.css"
const Login = ({ isLogin }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("formdata"));

    if (isLogin) {
      if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
        localStorage.setItem("isAuthenticated", "true");
        setTimeout(() => navigate("/dashboard"), 1000);
        // setTimeout(()=> useNavigate("/dashboard"),1000)
      } else {
        setMessage("Invalid Email or Password");
      }
    } else {
      localStorage.setItem("formdata", JSON.stringify(formData)); 
      setMessage("Signup Successful! Now login");
    }
  };

  return (
    
    <section>
  <h2>Login</h2>
            <div className="container">
        <div className="Form">
          <div className="input-container">
      <div>
        <h2>{isLogin ? "Login" : "Signup"}</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button type="submit">{isLogin ? "Login" : "Signup"}</button>
        </form>
        {message && <p>{message}</p>}
     
      <Link to="/">Didn't Sign Up?</Link>
      </div>
      </div>
      </div>
      </div>
   </section>
  );
};

export default Login;
