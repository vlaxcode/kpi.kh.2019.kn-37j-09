import React from "react";
import "./NavigationMobileMenu.scss";
import { Link } from "react-router-dom";

const NavigationMobileMenu = ({ onClick }) => (
  <div className="m-menu-container">
    <button className="close-menu-btn" type="button" onClick={onClick}>
      Close
    </button>
    <nav className="m-menu-navigation">
      <ul className="m-menu-list">
        <li className="nav-link">
          <Link to="/men" className="m-menu-list-item">
            MEN
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/women" className="m-menu-list-item">
            WOMEN
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/kids" className="m-menu-list-item">
            KIDS
          </Link>
        </li>
        <br />
        <li className="nav-link">
          {/* TODO: Connect login action to the future log in for component */}
          <Link to="/login" className="m-menu-list-item">
            LOG IN
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default NavigationMobileMenu;
