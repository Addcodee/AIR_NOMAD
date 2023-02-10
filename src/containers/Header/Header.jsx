import React from "react";
import "./Header.css";
import video from "../../assets/city.mp4";
import { useProduct } from "../../contexts/ProductContextProvider";

const Header = () => {
  const { lang } = useProduct();
  return (
    <div className="header">
      <div className="overlay"></div>
      <video src={video} autoPlay loop playsInline muted />
      <div className="header__title">
        <h1>
          {lang
            ? "We offer you the best places to stay"
            : "Мы предлагаем вам наилучшие места для отдыха"}
          !
        </h1>
      </div>
    </div>
  );
};

export default Header;
