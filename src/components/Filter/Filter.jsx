import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./Filter.css";

const Filter = () => {
  const { setOpenFilter, openFilter, getProducts } = useProduct();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getProducts(searchValue);
  }, [searchValue]);

  return (
    <div className="filter">
      <div className="filter__container">
        <div onClick={() => setOpenFilter(!openFilter)}>
          <span>Filters</span>
        </div>
        <div className="filter__line"></div>
        <div>
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
