import React from "react";
import { useNavigate } from "react-router";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const navigate = useNavigate();
  return (
    <div className="burgerMenu">
      <div className="burgerMenu__auth">
        <div
          onClick={() => navigate("/register")}
          className="burgerMenu-item"
        >
          <span>Зарегистрироваться</span>
        </div>
        <div
          onClick={() => navigate("/login")}
          className="burgerMenu-item"
        >
          <span>Войти</span>
        </div>
      </div>
      <hr />
      <div className="burgerMenu__action">
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
      </div>
    </div>
  );
};

export default BurgerMenu;
