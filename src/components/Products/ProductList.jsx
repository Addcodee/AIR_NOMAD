import React, { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import FilterModal from "../FilterModal/FilterModal";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <FilterModal />
      <div className="product__list">
        {products.map((obj) => (
          <ProductCard key={obj.id} obj={obj} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
