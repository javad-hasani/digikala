import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";


const Layout = ({ children }) => {
  return (
    // The main container element
    <div className="main-container">
      {/* Render the Header component */}
      <Header />
      {children}
      <Footer />
    </div>
  );
};


export default Layout;
