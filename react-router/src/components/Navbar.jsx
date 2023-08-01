import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="home">Homeboy</Link>
        <Link to="blue">Blue to Red</Link>
        <Link to="red">Red to Green</Link>
        <Link to="green">Green to Blue</Link>
    </div>
  );
};

export default Navbar;
