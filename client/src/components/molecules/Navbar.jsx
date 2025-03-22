import React from "react";
import { NavbarStyle } from "./molecules.style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.userToken);
  const handleNavigation = (e, path) => {
    console.log(token);

    if (!token) {
      e.preventDefault();
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <>
      <NavbarStyle>
        <nav className="navbar">
          <div className="logo">
            <a href="/" rel="noopener noreferrer">
              Saraswati AI
            </a>
          </div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a onClick={(e) => handleNavigation(e, "/create-class")}>
              Create Class
            </a>
            <a onClick={(e) => handleNavigation(e, "/dashboard")}>Dashboard</a>
            <a onClick={(e) => handleNavigation(e, "/live-class")}>
              Live Class
            </a>
          </div>
        </nav>
      </NavbarStyle>
    </>
  );
}

export default Navbar;
