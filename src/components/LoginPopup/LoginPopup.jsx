/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { assets } from "../../assets/assets";
import "./LoginPopup.css";
import { useState } from "react";

const LoginPopup = ({ setShowLogin }) => {
  const [action, setAction] = useState("Sign Up"); // Log in || Sign Up
  return (
    <div className="login-popup">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="login-popup-container container">
        <div className="login-popup-title ">
          <h2>{action}</h2>
          <img
            src={assets.cross_icon}
            alt="x icon"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {action === "Sign Up" ? (
            <input type="text" name="name" placeholder="Your Name" required />
          ) : (
            <></>
          )}
          <input type="email" name="email" placeholder="Your Email" required />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button className=" submit-btn">
          {action === "Sign Up" ? "Create an account" : "Log in"}
        </button>
        <div className="login-popup-condition">
          <label>
            <input id="terms-checkbox" type="checkbox" />
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
        {action === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="login-popup-change-action"
              onClick={() => setAction("Log in")}>
              Log in here!
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              className="login-popup-change-action"
              onClick={() => setAction("Sign Up")}>
              click here!
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
