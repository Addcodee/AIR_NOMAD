import React, { useState } from "react";
import "./filters.css";
import italy from "../../assets/italy.png";
import kyrgyzstan from "../../assets/kyrgyzstan.png";
import usa from "../../assets/usa.png";

const WhereFilter = () => {
  const [it, setIt] = useState(false);
  const [kg, setKg] = useState(false);
  const [us, setUs] = useState(false);

  return (
    <div className="where">
      <div
        onClick={() => {
          setIt(true);
          setKg(false);
          setUs(false);
        }}
        className="countries__cont"
      >
        <div className={it ? "active__country" : "countries"}>
          <img className="imgs" src={italy} alt="" />
        </div>
        <p>ITALY</p>
      </div>
      <div
        onClick={() => {
          setIt(false);
          setKg(true);
          setUs(false);
        }}
        className="countries__cont"
      >
        <div className={kg ? "active__country" : "countries"}>
          <img className="imgs" src={kyrgyzstan} alt="" />
        </div>
        <p>KYRGYZSTAN</p>
      </div>
      <div
        onClick={() => {
          setIt(false);
          setKg(false);
          setUs(true);
        }}
        className="countries__cont"
      >
        <div className={us ? "active__country" : "countries"}>
          <img className="imgs" src={usa} alt="" />
        </div>
        <p>USA</p>
      </div>
    </div>
  );
};

export default WhereFilter;
