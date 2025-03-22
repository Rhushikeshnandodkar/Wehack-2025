import React, { useState, useEffect } from "react";
import { LoginStyle } from "./Users.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalStyle } from "../commonpages/common.style";
import Navbar from "../../molecules/Navbar";
import loginimage from "../../../assets/loginnew.jpg"
import { userLogin } from "../../../features/userAuth/authSlice";

const LoginUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {isAuthenticated, isLoading} = useSelector((state) => (state.user))
  const status = 0
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const token = localStorage.getItem("userToken")
  useEffect(() =>{
    if(isAuthenticated && !isLoading){
      navigate('/dashboard')
    }
  }, [isAuthenticated, isLoading, navigate ])
  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password} = formData
    dispatch(userLogin({email, password}))
    console.log("Form Data:", formData);

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
          <h1>Login</h1>
          <p className="subtitle">Turn Your user manuals into conversation!</p>
          {status==401 ? <><div className="alert"><h6>Please Enter Valid Details</h6></div></> : <></>}
          <form className="auth-form" onSubmit={handleSubmit}>
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
              Login Now
            </button>
          </form>

          <p className="switch-auth">
            Don't have account? <Link to={'/register'}>Signup</Link>
          </p>
        </div>
      </div>
    </div>
    </LoginStyle>
    </>
  );
};

export default LoginUser;
