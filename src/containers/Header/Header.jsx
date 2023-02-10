import React from "react";
import "./Header.css";
import video from "../../assets/city.mp4";

const Header = () => {
  return (
    <div className="header">
      <div className="overlay"></div>
      <video src={video} autoPlay loop playsInline muted />
      <div className="header__title">
        <h1>Мы предлагаем вам наилучшие места для отдыха!</h1>
      </div>
    </div>
  );
};

export default Header;
