import React from "react";
import { FaCoins } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icons" />
        <h1>
          Coin <span className="purple">Search</span>
        </h1>
      </div>
    </Link>
  );
}

export default Navbar;
