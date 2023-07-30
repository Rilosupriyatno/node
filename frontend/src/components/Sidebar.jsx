import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const Sidebar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    try {
      axios.delete("http://localhost:5000/logout", {
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="con">
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label has-text-white" id="sd">
          General
        </p>
        <ul className="menu-list has-text-white">
          <li>
            <NavLink to={"/dashboard"} id="sd">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/games"} id="sd">
              Games
            </NavLink>
          </li>
        </ul>
        {/* <p className="menu-label">Administration</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>Users</NavLink>
          </li>
        </ul> */}
        <p className="menu-label" id="sd">
          Setting
        </p>
        <ul className="menu-list">
          <li>
            <button onClick={Logout} className="button is-light">
              Log Out
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
