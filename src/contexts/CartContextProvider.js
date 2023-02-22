import React, { createContext, useContext, useReducer } from "react";

export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //? getProducts
  function getProductsFromCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem("cart", JSON.stringify({ products: [] }));
      cart = { products: [] };
    }

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  //? addProductToCart

  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = { products: [] };
    }

    const findProduct = cart.products.filter(
      (obj) => obj.id === product.id
    );

    if (findProduct.length === 0) {
      cart.products.push(product);
    } else {
      cart.products = cart.products.filter(
        (obj) => obj.id !== product.id
      );
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }

  //? removeProductInCart

  // function removeProductInCart(id) {
  //   let cart = JSON.parse(localStorage.getItem("cart"));

  //   cart.products = cart.products.filter(
  //     (obj) => obj.product.id !== id
  //   );

  //   cart.totalPrice = calcTotalPrice(cart.products);

  //   localStorage.setItem("cart", JSON.stringify(cart));

  //   dispatch({
  //     type: CART.GET_CART,
  //     payload: cart,
  //   });
  // }

  //? removeAllProductsInCart

  // function removeAllProductsInCart() {
  //   localStorage.removeItem("cart");
  //   getProductsFromCart();
  // }

  const values = {
    getProductsFromCart,
    addProductToCart,
    cart: state.cart,
    // removeAllProductsInCart,
    // removeProductInCart,
  };
  return (
    <cartContext.Provider value={values}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
