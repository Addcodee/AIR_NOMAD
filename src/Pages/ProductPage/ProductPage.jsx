import React from "react";
import HousesFilter from "../../components/HousesFilter/HousesFilter";
import ProductList from "../../components/Products/ProductList";

const ProductPage = () => {
  return (
    <div>
      <HousesFilter />
      <ProductList />
    </div>
  );
};

export default ProductPage;
