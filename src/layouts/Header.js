import React from 'react';
import {
  Link
} from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark fixed-top">
        <Link to="/" className="navbar-brand"><i className="fas fa-user-graduate"></i> LOGO</Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Wyloguj</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;