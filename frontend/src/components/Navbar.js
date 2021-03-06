import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            UCLASubletting
            <i class="fas fa-home"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/add-a-property"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Add a Property
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/property-list"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Property List
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-in"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-squished-sign-up"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          <Link to="/sign-up">
            <button className="sign-up-button"> Sign Up</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;