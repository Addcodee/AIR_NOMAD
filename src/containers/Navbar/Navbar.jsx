import { Paper } from "@mui/material";
import React, { useState } from "react";
import "./Navbar.css";
import { GrLanguage } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-top">
        <div onClick={() => navigate("/")} className="navbar__logo">
          <span>AIR NOMAD</span>
        </div>
        <div className="navbar__search"></div>
        <div className="navbar__auth">
          <div className="navbar__auth-language">
            <GrLanguage style={{ width: "2em", height: "2em" }} />
          </div>
          <div
            onClick={() => setMenu(!menu)}
            className="navbar__auth-menu"
          >
            <RxHamburgerMenu
              style={{ width: "2em", height: "2em" }}
            />
            <img
              className="navbar__auth-avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png"
              alt="avatar"
            />
          </div>
          {menu ? <BurgerMenu /> : null}
        </div>
      </div>
      <div className="navbar-bottom"></div>
    </div>
  );
};

export default Navbar;
