import React from "react";
import "./Navbar.css";
import logo from "../../static/PwCLogo.png";
import help from "../../static/help.png";
import profile from "../../static/Group 2.png";
import { BsGrid3X3Gap } from "react-icons/bs";
import { AiOutlineWarning } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import SelectClient from "./SelectClient";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <div className="side-navbar">
        <ul className="side-menu">
          <li>
            <Link to="/overview">
              <div className="li-nav-item">
                <div>
                  <BsGrid3X3Gap style={{ color: "red", fontSize: "25px" }} />
                </div>
                <div>Overview</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/incident">
              <div className="li-nav-item">
                <div>
                  <AiOutlineWarning style={{ color: "red", fontSize: "25px" }} />
                </div>
                <div>Incidents</div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/request">
              <div className="li-nav-item">
                <div>
                  <HiOutlineUserGroup style={{ color: "red", fontSize: "25px" }} />
                </div>
                <div>Requests</div>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="top-navbar">
        <div className="top-logo-sides">
          <Link to="/">
            <img src={logo} alt="logo" className="menu-logo" />
          </Link>
          <img src={help} alt="help" className="help-logo" />
        </div>
        <ul className="top-menu">
          <li className="client-select">
            <SelectClient />
          </li>
          <li className="user-name">Hi, Aman</li>
          <img src={profile} alt="profile" className="profile-menu" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
