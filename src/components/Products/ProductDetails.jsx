import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./ProductDetails.css";
import { MdPool } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { BiFridge } from "react-icons/bi";
import { MdOutlineAir } from "react-icons/md";
import { TbDeviceTv } from "react-icons/tb";
import { GiSofa } from "react-icons/gi";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { AiFillMedicineBox } from "react-icons/ai";
import { TbToolsKitchen } from "react-icons/tb";
import { useAuth } from "../../contexts/AuthContextProvider";

const ProductDetails = () => {
  const { getOneProduct, oneProduct, deleteProduct } = useProduct();
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProductToCart, getProductsFromCart } = useCart();
  const [product, setProduct] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

  useEffect(() => {
    setOwner(user);
  }, [user]);

  console.log(product);

  return (
    <div className="details">
      <div className="details__header">
        <h2>{product.title}</h2>
        <div className="details__info">
          <div className="details__info-left">
            <div className="details__review">
              <AiFillStar
                style={{ width: "1.8em", height: "1.8em" }}
              />
              <b>3.42</b>
            </div>
            <b>12 reviews</b>
            <b>
              location: {product.city}, {product.country_category}
            </b>
          </div>
          <div className="details__btns">
            <div>
              {console.log(owner)}
              {product.owner_email === owner ? (
                <>
                  <button onClick={() => navigate(`/edit/${id}/`)}>
                    edit
                  </button>
                  <button
                    onClick={() => {
                      deleteProduct(id);
                      navigate("/houses");
                    }}
                  >
                    delete
                  </button>
                </>
              ) : null}
              <button onClick={() => addProductToCart(product)}>
                wish
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="details__imgs">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={product.image1} alt="product__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product.image2} alt="product__img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={product.image3} alt="product__img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="details__main-content">
        <div className="details__features">
          <div>
            <h2>{product.category}, хозяин: Admin</h2>
          </div>
          <div className="features__count">
            <p>{product.guests} гостей,</p>
            <p>{product.rooms} спален,</p>
            <p>{product.beds} кроватей,</p>
            <p>{product.bathrooms} ванных комнат</p>
          </div>
          <div className="details__descr">
            <p>{product.description}</p>
          </div>
          <div className="details__comforts">
            {product.wifi ? (
              <p>
                <AiOutlineWifi />
                Wifi
              </p>
            ) : null}
            {product.fridge ? (
              <p>
                <BiFridge />
                Fridge
              </p>
            ) : null}
            {product.air_conditioner ? (
              <p>
                <MdOutlineAir />
                Air-Conditioner
              </p>
            ) : null}
            {product.tv ? (
              <p>
                <TbDeviceTv />
                TV
              </p>
            ) : null}
            {product.pool ? (
              <p>
                <MdPool />
                Pool
              </p>
            ) : null}
            {product.furniture ? (
              <p>
                <GiSofa />
                Furniture
              </p>
            ) : null}
            {product.washing ? (
              <p>
                <CgSmartHomeWashMachine />
                Washmachine
              </p>
            ) : null}
            {product.medicine ? (
              <p>
                <AiFillMedicineBox />
                Medicine
              </p>
            ) : null}
            {product.kitchen ? (
              <p>
                <TbToolsKitchen />
                Kitchen
              </p>
            ) : null}
          </div>
        </div>
        <div className="details__pay-form">
          <p>${product.price}</p>
          <button>Забронировать</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
