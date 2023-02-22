import React from "react";
import "./Header.css";
import video from "../../assets/planet.mp4";
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
            ? "We offer the best places to stay!"
            : "Мы предлагаем лучшие места!"}
          
        </h1>
      </div>
    </div>
  );
};

export default Header;
