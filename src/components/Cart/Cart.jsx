import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContextProvider";
import "./Cart.css";

const Cart = () => {
  const {
    getProductsFromCart,
    cart,
    removeAllProductsInCart,
    removeProductInCart,
  } = useCart();
  useEffect(() => {
    getProductsFromCart();
  }, []);
  console.log(cart);
  return (
    <div className="cart">
      <div className="cart__title">
        <h2>Wish List</h2>
      </div>
      <button
        onClick={removeAllProductsInCart}
        style={{
          border: "none",
          backgroundColor: "white",
          color: "red",
          fontSize: "16px",
          marginBottom: "1rem",
          cursor: "pointer",
        }}
      >
        Delete All
      </button>
      <div className="cart__container">
        <Paper className="cart__paper">
          {cart.products.map((obj) => (
            <div className="cart__card" key={obj.id}>
              <div className="cart__main-img">
                <img src={obj.image1} alt="img" />
              </div>
              <div className="cart__rest-img">
                <img
                  style={{ width: "14em" }}
                  src={obj.image2}
                  alt="img"
                />
                <img
                  style={{ width: "14em" }}
                  src={obj.image3}
                  alt="img"
                />
              </div>
              <button
                onClick={() => removeProductInCart(obj.id)}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  color: "red",
                  fontSize: "16px",
                  marginBottom: "1rem",
                  cursor: "pointer",
                }}
              >
                Delete Wish
              </button>
            </div>
          ))}
        </Paper>
      </div>
    </div>
  );
};

export default Cart;
