import React from "react";
import "../App.css";
import "./componentStyles.css";
import { useState } from "react";
// import "./ham.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import HamButton from "./HamButton";
import logo from "../assets/images/logo.png";

const NavBarComponent = () => {
  const [click, setClick] = React.useState(false);
  const [ham, hamState] = useState("ham hamRotate ham7");
  const [navClass, setnavClass] = useState("navbar");
  const handleClick = () => {
    setClick(!click);
    hamClick();
  };
  const Close = () => {
    setClick(false);
    // hamState("ham open");
  };

  const hamClick = () => {
    if (ham == "ham hamRotate ham7 active") {
      hamState("ham hamRotate ham7");
      setnavClass("navbar")
      
    } else {
      hamState("ham hamRotate ham7 active");
      setnavClass("navbar br-null ")
    }
  };
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className={navClass} onClick={(e) => e.stopPropagation()}>
        <NavLink exact to="/" className='brand'>
          <img src={logo} alt="" className="logoImg" />
          <span className='ecell-txt'>E-CELL VESIT</span>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/team"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Council
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/events"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              Events
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              to="/about"
              activeClassName="active"
              className="nav-links"
              onClick={click ? handleClick : null}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <svg
            class={ham}
            viewBox="0 0 100 100"
            width="80"
            // onclick="this.classList.toggle('active')"
            onClick={hamClick}
          >
            <path
              class="line top"
              d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
            />
            <path class="line middle" d="m 70,50 h -40" />
            <path
              class="line bottom"
              d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
            />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default NavBarComponent;
