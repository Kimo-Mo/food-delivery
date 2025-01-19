/* eslint-disable react/prop-types */
import "./LoginPopup.css";
import { useState } from "react";

const LoginPopup = ({ setShowLogin, setUser }) => {
  const [action, setAction] = useState("Sign Up"); // Log in || Sign Up
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, password } = formInputs;
    const newErrorMsg = { name: false, email: false, password: false };

    if (!name) {
      newErrorMsg.name = "Name is required";
    } else if (name.length < 3) {
      newErrorMsg.name = "Name is too short";
    }

    if (!email) {
      newErrorMsg.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi.test(email)) {
      newErrorMsg.email = "Invalid email";
    }

    if (!password) {
      newErrorMsg.password = "Password is required";
    } else if (password.length < 8) {
      newErrorMsg.password = "Password is too short";
    }

    if (action === "Sign Up") {
      if (!newErrorMsg.name && !newErrorMsg.email && !newErrorMsg.password) {
        setUser(formInputs.name);
        setShowLogin(false);
      } else {
        setErrorMsg(newErrorMsg);
      }
    } else if (action === "Log in") {
      if (!newErrorMsg.email && !newErrorMsg.password) {
        setUser(formInputs.email);
        setShowLogin(false);
      } else {
        setErrorMsg(newErrorMsg);
      }
    }
  }
  return (
    <div className="login-popup">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="login-popup-container container">
        <div className="login-popup-title ">
          <h2>{action}</h2>
          <img
            src="imgs/cross_icon.png"
            alt="x icon"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {action === "Sign Up" && (
            <>
              <input
                type="text"
                name="name"
                value={formInputs.name}
                onChange={(e) =>
                  setFormInputs({ ...formInputs, name: e.target.value })
                }
                placeholder="Your Name"
              />
              {errorMsg.name && <p className="text-danger">{errorMsg.name}</p>}
            </>
          )}
          <input
            type="email"
            name="email"
            value={formInputs.email}
            onChange={(e) =>
              setFormInputs({ ...formInputs, email: e.target.value })
            }
            placeholder="Your Email"
          />
          {errorMsg.email && <p className="text-danger">{errorMsg.email}</p>}
          <input
            type="password"
            name="password"
            value={formInputs.password}
            onChange={(e) =>
              setFormInputs({ ...formInputs, password: e.target.value })
            }
            placeholder="Your Password"
          />
          {errorMsg.password && (
            <p className="text-danger">{errorMsg.password}</p>
          )}
          <button className=" submit-btn">
            {action === "Sign Up" ? "Create an account" : "Log in"}
          </button>
        </div>
        <div className="login-popup-condition">
          <label>
            <input id="terms-checkbox" type="checkbox" required />
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
