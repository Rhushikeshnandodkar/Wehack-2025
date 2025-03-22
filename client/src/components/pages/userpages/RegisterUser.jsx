import React, { useState, useEffect } from "react";
import { LoginStyle, RegisterStyle } from "./Users.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import loginimage from "../../../assets/loginnew.jpg"
import { Link } from "react-router-dom";
import { GlobalStyle } from "../commonpages/common.style";
import Navbar from "../../molecules/Navbar";
import { userSignup } from "../../../features/userAuth/authSlice";

const RegisterUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type : "tutor"
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, password, type} = formData
    dispatch(userSignup({name, email, password, type}))
    console.log("Form Data:", formData);
    // Call API here
  };

  return (
    <>
    <GlobalStyle />
    <Navbar />
    <LoginStyle>
    <div className="container">
      <div className="auth-container">
        <div className="image-section">
          <img
            src={loginimage}
            alt="Robot illustration"
          />
        </div>
        <div className="form-section">
          <h1>Join Us Now</h1>
          <p className="subtitle">Turn Your manuals into conversation!</p>

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>

          <p className="switch-auth">
            Allready have account? <Link to={'/login'}>Login</Link>
          </p>
        </div>
      </div>
    </div>
    </LoginStyle>
    </>
  );
};

export default RegisterUser;
