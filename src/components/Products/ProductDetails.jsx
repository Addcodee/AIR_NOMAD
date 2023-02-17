import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { getOneProduct, oneProduct, deleteProduct } = useProduct();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, []);
  console.log(oneProduct);
  return (
    <div>
      <button onClick={() => navigate(`/edit/${id}/`)}>edit</button>
      <button
        onClick={() => {
          deleteProduct(id);
          navigate("/houses");
        }}
      >
        delete
      </button>
    </div>
  );
};

export default ProductDetails;
