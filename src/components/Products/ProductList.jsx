import React, { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const { getProducts, products } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div className="product__list">
      {products.map((obj) => (
        <ProductCard key={obj.id} obj={obj} />
      ))}
    </div>
  );
};

export default ProductList;
