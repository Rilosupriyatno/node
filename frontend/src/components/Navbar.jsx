import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/favicon_io/logo.png";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    try {
      axios.delete("http://localhost:5000/logout", { withCredentials: true });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to={"/dashboard"} className="navbar-item">
              <img src={logo} width="112" height="28" alt="logo" />
            </NavLink>

            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              href="#"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <button onClick={Logout} className="button is-light">
                    Log out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
