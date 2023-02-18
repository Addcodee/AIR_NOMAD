import React from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./Filter.css";

const Filter = () => {
  const { setOpenFilter, openFilter } = useProduct();
  return (
    <div className="filter">
      <div className="filter__container">
        <div onClick={() => setOpenFilter(!openFilter)}>
          <span>Filters</span>
        </div>
        <div className="filter__line"></div>
        <div>
          <input type="text" placeholder="Search..."/>
        </div>
      </div>
    </div>
  );
};

export default Filter;
