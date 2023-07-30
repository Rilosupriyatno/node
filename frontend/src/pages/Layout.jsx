import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "120vh" }}>
        <div className="column is-2 mt-6">
          <Sidebar />
        </div>
        <div className="column has-background-light mt-6">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
