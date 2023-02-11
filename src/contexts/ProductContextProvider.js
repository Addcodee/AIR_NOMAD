import React, { createContext, useContext, useState } from "react";

export const productContext = createContext();
export const useProduct = () => useContext(productContext);

const ProductContextProvider = ({ children }) => {
  const [lang, setLang] = useState(false);
  const values = { lang, setLang };
  return (
    <productContext.Provider value={values}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
