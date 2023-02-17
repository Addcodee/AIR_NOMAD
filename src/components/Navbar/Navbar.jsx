import { Paper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { MdLanguage } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbTent } from "react-icons/tb";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useLocation, useNavigate } from "react-router";
import { useProduct } from "../../contexts/ProductContextProvider";

const Navbar = () => {
  const { lang, setLang } = useProduct();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();
  const location = useLocation();

  useEffect(() => {
    let handler = (e) => {
      if (location.pathname === "/") {
        if (!menuRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

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
        <div className="navbar__search">
          <div onClick={() => navigate("/houses")}>GET STARTED</div>
        </div>
        <div ref={menuRef} className="navbar__auth">
          <div
            onClick={() => setLang(!lang)}
            className="navbar__auth-language"
          >
            <MdLanguage style={{ width: "2em", height: "2em" }} />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="navbar__auth-menu"
          >
            <RxHamburgerMenu
              style={{ width: "2em", height: "2em" }}
            />
          </div>
          {open ? <BurgerMenu /> : null}
        </div>
      </div>
      <div className="navbar-bottom"></div>
    </div>
  );
};

export default Navbar;
