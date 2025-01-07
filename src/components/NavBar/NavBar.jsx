/* eslint-disable react/prop-types */
import "./NavBar.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { storeContext } from "../../Contexts/StoreContext";
const NavBar = ({ setShowLogin }) => {
  const [active, setActive] = useState("home");
  const { getTotalCartAmount } = useContext(storeContext);
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link to="/Home">
          <img className="logo" src="/imgs/logo.png" alt="Logo" />
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
            onClick={() => {
              setActive("menu");
              navigate("/Home");
            }}
            className={`nav-item ${active === "menu" ? "active" : ""}`}>
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setActive("mobile-app");
              navigate("/Home");
            }}
            className={`nav-item ${active === "mobile-app" ? "active" : ""}`}>
            mobile app
          </a>
          <a
            href="#footer"
            onClick={() => {
              setActive("contact-us");
            }}
            className={`nav-item ${active === "contact-us" ? "active" : ""}`}>
            contact us
          </a>
        </ul>
        <div className="navBar-right">
          <img src="/imgs/search_icon.png" alt="search icon" />
          <div className="navBar-basketIcon position-relative">
            <Link to="/Cart">
              <img
                src="/imgs/basket_icon.png"
                alt="basket icon"
                onClick={() => setActive(null)}
              />
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
