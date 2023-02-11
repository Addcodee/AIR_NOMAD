import { Paper } from "@mui/material";
import React, { useState } from "react";
import "./Navbar.css";
import { MdLanguage } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbTent } from "react-icons/tb";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useNavigate } from "react-router";
import { useProduct } from "../../contexts/ProductContextProvider";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const { lang, setLang } = useProduct();

  return (
    <div className="navbar">
      <div className="navbar-top">
        <div
          onClick={() => navigate("/")}
          className="navbar__container-logo"
        >
          <TbTent className="navbar__logo" />
          <span>AIR NOMAD</span>
        </div>
        <div className="navbar__search">GET STARTED</div>
        <div className="navbar__auth">
          <div
            onClick={() => setLang(!lang)}
            className="navbar__auth-language"
          >
            <MdLanguage style={{ width: "2em", height: "2em" }} />
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
