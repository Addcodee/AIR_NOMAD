import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const {
    getCategories,
    categories,

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

    getOneProduct,
    oneProduct,
    updateProduct,
  } = useProduct();

  const navigate = useNavigate();

  const { id } = useParams();

  // дом , ферма ...
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [flatNumber, setFlatNumber] = useState("");

  const [stock, setStock] = useState(false);

  const [imgs, setImgs] = useState([]);
  const [imgsToBack, setImgsToBack] = useState([]);

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

  // стейты для guests,beds,bathrooms,bedrooms

  const [newGuestCount, setNewGuestCount] = useState(1);
  const [newBedroomsCount, setNewBedroomsCount] = useState(1);
  const [newBedsCount, setNewBedsCount] = useState(1);
  const [newBathroomsCount, setNewBathroomsCount] = useState(1);

  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setCategory(oneProduct.category);
      setCountry(oneProduct.country_category);
      setCity(oneProduct.city);
      setName(oneProduct.title);
      setStreet(oneProduct.address);
      setHouseNumber(oneProduct.house_number);
      setFlatNumber(oneProduct.flat_number);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setNewGuestCount(oneProduct.guests);
      setNewBedroomsCount(oneProduct.rooms);
      setNewBedsCount(oneProduct.beds);
      setNewBathroomsCount(oneProduct.bathrooms);
      
    }
  }, [oneProduct]);

  console.log(oneProduct);

  const checkFoto = (e) => {
    setImgsToBack(e.target.files);
    const files = e.target.files;
    const arr = Array.from(files);
    const mapped = arr.map((file) => URL.createObjectURL(file));
    setImgs(mapped);
  };

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

    updateProduct(id, newProduct);
  }

  // console.log(guestCount);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
        paddingTop: "5rem",
      }}
    >
      <select
        style={{ marginBottom: "1rem", padding: "1rem" }}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option
          style={{ marginBottom: "1rem", padding: "1rem" }}
          value=""
        >
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
        <option
          style={{ marginBottom: "1rem", padding: "1rem" }}
          value=""
        >
          choose country
        </option>

        {countries.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>

      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="city"
      />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="title"
      />

      <input
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="street"
      />
      <input
        value={houseNumber}
        onChange={(e) => setHouseNumber(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="houseNumber"
      />
      <input
        value={flatNumber}
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

        <p
          value={newGuestCount}
          style={{ fontSize: "2rem", color: "violet" }}
          align="center"
        >
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
        <p
          style={{ fontSize: "2rem", color: "violet" }}
          align="center"
        >
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
        <p
          style={{ fontSize: "2rem", color: "violet" }}
          align="center"
        >
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
        <p
          style={{ fontSize: "2rem", color: "violet" }}
          align="center"
        >
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
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="description"
      />
      <input
        value={price}
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
      ))}

      <button
        onClick={() => setStock(!stock)}
        style={{ padding: "1rem" }}
      >
        {stock ? "active" : "disabled"}
      </button>
      <br />

      <button onClick={handleSave} style={{ padding: "1rem" }}>
        Save
      </button>
    </div>
  );
};

export default EditProduct;
