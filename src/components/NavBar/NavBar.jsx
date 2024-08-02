/* eslint-disable react/prop-types */
import "./NavBar.css";
import { assets } from "./../../assets/assets";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { storeContext } from "../../Contexts/StoreContext";
const NavBar = ({ setShowLogin }) => {
  const [active, setActive] = useState("home");
  const { getTotalCartAmount } = useContext(storeContext);
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link to="/Home">
          <img className="logo" src={assets.logo} alt="Logo" />
        </Link>
        <ul className="navbar-nav d-lg-flex d-none">
          <Link to="/Home">
            <li
              onClick={() => setActive("home")}
              className={`nav-item ${active === "home" ? "active" : ""}`}>
              home
            </li>
          </Link>
          <a
            href="#explore-menu"
            onClick={() => setActive("menu")}
            className={`nav-item ${active === "menu" ? "active" : ""}`}>
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => setActive("mobile-app")}
            className={`nav-item ${active === "mobile-app" ? "active" : ""}`}>
            mobile app
          </a>
          <a
            href="#footer"
            onClick={() => setActive("contact-us")}
            className={`nav-item ${active === "contact-us" ? "active" : ""}`}>
            contact us
          </a>
        </ul>
        <div className="navBar-right">
          <img src={assets.search_icon} alt="search icon"  />
          <div className="navBar-basketIcon position-relative">
            <Link to="/Cart">
              <img src={assets.basket_icon} alt="basket icon" />
            </Link>
            <div className={getTotalCartAmount() ? "dot" : ""}></div>
          </div>
          <button className="signUp btn" onClick={() => setShowLogin(true)}>
            sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
