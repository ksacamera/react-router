import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="home">Homeboy</Link>
        <Link to="/blue">Blue to Red</Link>
        <Link to="/red">Red to Blue</Link>
        <Link to="/green">Green to Blue</Link>
      </div>
    </footer>
  );
};

export default Footer;
