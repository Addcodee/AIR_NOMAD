import React, { createContext, useContext } from "react";

export const productContext = createContext();

export const useProduct = () => useContext(productContext);
const ProductContextProvider = ({ children }) => {
  const values = {};
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
