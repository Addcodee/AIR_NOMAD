import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import "./AddProduct.css";
import ProductCard from "./ProductCard";

const AddProduct = () => {
  //? functions from product context
  const navigate = useNavigate();

  const {
    getCategories,
    categories,
    createProduct,

    getCountries,
    countries,

    incrementGuestCount,
    decrementGuestCount,
    guestCount,

    incrementBedroomsCount,
    decrementBedroomsCount,
    bedroomsCount,

    incrementBedsCount,
    decrementBedsCount,
    bedsCount,

    incrementBathroomsCount,
    decrementBathroomsCount,
    bathroomsCount,
  } = useProduct();

  //? country and house categories

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  //? house category
  const [category, setCategory] = useState("");

  //? country category
  const [country, setCountry] = useState("");

  //? house's name, location and index
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [flatNumber, setFlatNumber] = useState("");

  //? stock shows, is the house active or not
  const [stock, setStock] = useState(true);

  //? images to show on user create panel
  const [imgs, setImgs] = useState([]);

  //? images, that sending to the backend
  const [imgsToBack, setImgsToBack] = useState([]);

  //? comforts
  const [wifi, setWifi] = useState(false);
  const [fridge, setFridge] = useState(false);
  const [condition, setCondition] = useState(false);
  const [tv, setTv] = useState(false);
  const [pool, setPool] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [wash, setWash] = useState(false);
  const [medicine, setMedicine] = useState(false);
  const [kitchen, setKitchen] = useState(false);

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  //? function, that shows pictures after their upload

  const checkFoto = (e) => {
    setImgsToBack(e.target.files);
    const files = e.target.files;
    const arr = Array.from(files);
    const mapped = arr.map((file) => URL.createObjectURL(file));
    setImgs(mapped);
  };
  console.log(imgs);

  //? this function collect an object of datas and give to the 'createProduct' function

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("category", category);
    newProduct.append("country_category", country);
    newProduct.append("city", city);
    newProduct.append("title", name);
    newProduct.append("address", street);
    newProduct.append("house_number", Number(houseNumber));
    newProduct.append("flat_number", Number(flatNumber));
    newProduct.append("guests", Number(guestCount));
    newProduct.append("beds", Number(bedsCount));
    newProduct.append("rooms", Number(bedroomsCount));
    newProduct.append("bathrooms", Number(bathroomsCount));

    newProduct.append("image1", imgsToBack[0]);
    newProduct.append("image2", imgsToBack[1]);
    newProduct.append("image3", imgsToBack[2]);

    newProduct.append("stock", stock);

    newProduct.append("wifi", wifi);
    newProduct.append("fridge", fridge);
    newProduct.append("air_conditioner", condition);
    newProduct.append("tv", tv);
    newProduct.append("pool", pool);
    newProduct.append("furniture", furniture);
    newProduct.append("washing", wash);
    newProduct.append("medicine", medicine);
    newProduct.append("kitchen", kitchen);
    newProduct.append("description", description);
    newProduct.append("price", Number(price));

    //? this function creates the product
    createProduct(newProduct);
  }

  return (
    <div className="add__product">
      <select
        style={{ marginBottom: "1rem", padding: "1rem" }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option style={{ marginBottom: "1rem", padding: "1rem" }} value="">
          select category for rent
        </option>

        {categories.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>

      <select
        style={{ marginBottom: "1rem", padding: "1rem" }}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option style={{ marginBottom: "1rem", padding: "1rem" }} value="">
          choose country
        </option>

        {countries.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>

      <input
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="city"
      />

      <input
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="title"
      />

      <input
        onChange={(e) => setStreet(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="street"
      />
      <input
        onChange={(e) => setHouseNumber(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="houseNumber"
      />
      <input
        onChange={(e) => setFlatNumber(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="flat_number"
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">guests</p>
        <button
          onClick={decrementGuestCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          MINUS
        </button>
        <p style={{ fontSize: "2rem", color: "violet" }} align="center">
          {" "}
          {guestCount}
        </p>
        <button
          onClick={incrementGuestCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          PLUS
        </button>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">bedrooms</p>
        <button
          onClick={decrementBedroomsCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          MINUS
        </button>
        <p style={{ fontSize: "2rem", color: "violet" }} align="center">
          {bedroomsCount}
        </p>
        <button
          onClick={incrementBedroomsCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          PLUS
        </button>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">beds</p>
        <button
          onClick={decrementBedsCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          MINUS
        </button>
        <p style={{ fontSize: "2rem", color: "violet" }} align="center">
          {bedsCount}
        </p>
        <button
          onClick={incrementBedsCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          PLUS
        </button>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">bathrooms</p>
        <button
          onClick={decrementBathroomsCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          MINUS
        </button>
        <p style={{ fontSize: "2rem", color: "violet" }} align="center">
          {bathroomsCount}
        </p>
        <button
          onClick={incrementBathroomsCount}
          style={{ padding: "1rem", backgroundColor: "aqua" }}
        >
          PLUS
        </button>
      </div>
      <br />
      <br />

      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setWifi(!wifi)}
      >
        WIFI
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setFridge(!fridge)}
      >
        FRIDGE
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setCondition(!condition)}
      >
        CONDITION
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setTv(!tv)}
      >
        TV
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setPool(!pool)}
      >
        POOL
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setFurniture(!furniture)}
      >
        FURNITURE
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setWash(!wash)}
      >
        WASH
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setMedicine(!medicine)}
      >
        Medicine
      </button>
      <br />
      <button
        style={{ backgroundColor: "yellow", padding: "1rem" }}
        onClick={() => setKitchen(!kitchen)}
      >
        KITCHEN
      </button>
      <br />
      <br />

      <input
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="description"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="price"
      />

      <input
        multiple
        accept="image/*"
        style={{ marginBottom: "1rem" }}
        onChange={checkFoto}
        type="file"
        placeholder="img"
      />

      {imgs?.map((img) => (
        <img key={img} src={img} alt="error" />
        // <ProductCard key={img.id}/>
      ))}

      <button onClick={() => setStock(!stock)} style={{ padding: "1rem" }}>
        {stock ? "active" : "disabled"}
      </button>
      <br />

      <button onClick={handleSave} style={{ padding: "1rem" }}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
