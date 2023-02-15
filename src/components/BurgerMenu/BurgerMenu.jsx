import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useProduct();
  const { user, handleLogout } = useAuth();
  return (
    <div className="burgerMenu">
      <div className="burgerMenu__auth">
        {user ? (
          <div onClick={handleLogout} className="burgerMenu-item">
            <span>Log out</span>
          </div>
        ) : (
          <div
            onClick={() => navigate("/login")}
            className="burgerMenu-item"
          >
            <span>Авторизоваться</span>
          </div>
        )}
      </div>
      <hr />
      <div className="burgerMenu__action">
        <div id="start__page" className="burgerMenu-item">
          <span>GET STARTED</span>
        </div>
        <div
          onClick={() => navigate("/homes")}
          className="burgerMenu-item"
        >
          <span>Сдать жилье на AirNomad</span>
        </div>
        <div className="burgerMenu-item">
          <span>Организуйте впечатление</span>
        </div>
        <div className="burgerMenu-item">
          <span>Помощь</span>
        </div>
        <div
          id="lang__toggle"
          onClick={() => setLang(!lang)}
          className="burgerMenu-item"
        >
          <span>{lang ? "Language: english" : "Язык: русский"}</span>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
