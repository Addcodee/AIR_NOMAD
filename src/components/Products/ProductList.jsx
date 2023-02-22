import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import FilterModal from "../FilterModal/FilterModal";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const { getProducts, products, pages } = useProduct();

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e, p) => {
    setCurrentPage(p);
  };

  const currentData = () => {
    const begin = (currentPage - 1) * 4;
    const end = begin + 4;
    return products.slice(begin, end);
  };

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      <FilterModal />
      <div className="product__list">
        {currentData()?.map((obj) => (
          <ProductCard key={obj.id} obj={obj} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
          zIndex: "-1",
        }}
      >
        <Pagination
          count={pages}
          page={currentPage}
          variant="outlined"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ProductList;
