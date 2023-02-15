import React, { useEffect, useState } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const {
    getCategories,
    categories,
    createProduct,

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

  useEffect(() => {
    getCategories();
  }, []);

  // console.log(categories);

  // дом , ферма ...
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const [city, setCity] = useState("");

  const [guest, setGuest] = useState(1);
  const [bed, setBed] = useState(1);
  const [bedroom, setBedroom] = useState(1);
  const [bathroom, setBathroom] = useState(1);

  const [imgs, setImgs] = useState([]);
  // const [img2, setImg2] = useState("");
  // const [img3, setImg3] = useState("");
  // const [img4, setImg4] = useState("");
  // const [img5, setImg5] = useState("");

  //TODO стейты для удобств

  const [wifi, setWifi] = useState(false);
  const [fridge, setFridge] = useState(false);
  const [condition, setCondition] = useState(false);
  const [tv, setTv] = useState(false);
  const [pool, setPool] = useState(false);
  const [furniture, setFurniture] = useState(false);
  const [wash, setWash] = useState(false);
  const [medicine, setMedicine] = useState(false);
  const [kitchen, setKitchen] = useState(false);

  const checkFoto = (e) => {
    const files = e.target.files;
    const arr = Array.from(files);
    const mapped = arr.map((file) => URL.createObjectURL(file));
    setImgs(mapped);
  };

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("category", category);
    newProduct.append("country_category", country);
    newProduct.append("city", city);
    newProduct.append("title", name);
    newProduct.append("adress", street);
    newProduct.append("house_number", houseNumber);
    newProduct.append("flat_number", flatNumber);
    newProduct.append("guests", guest);
    newProduct.append("beds", bed);
    newProduct.append("rooms", bedroom);
    newProduct.append("bathrooms", bathroom);

    newProduct.append("image1", imgs[0]);
    newProduct.append("image2", imgs[1]);
    newProduct.append("image3", imgs[2]);
    newProduct.append("image3", imgs);

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
    newProduct.append("price", price);

    // createProduct(newProduct);
    console.log(newProduct);
  }
  // console.log(wifi);
  // console.log(pool);
  console.log(imgs);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
      }}
    >
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

      <input
        onChange={(e) => setCountry(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="country"
      />

      <input
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="city"
      />

      {/* <select
        style={{ marginBottom: "1rem", padding: "1rem" }}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      >
        <option style={{ marginBottom: "1rem", padding: "1rem" }} value="">
          choose country
        </option>

        {country.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select> */}

      <input
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="name"
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

      {/* <input
        onChange={(e) => setGuest(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="guests"
      /> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">guests</p>
        <button onClick={decrementGuestCount}>MINUS</button>
        <p align="center"> {guestCount}</p>
        <button onClick={incrementGuestCount}>PLUS</button>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">bedrooms</p>
        <button onClick={decrementBedroomsCount}>MINUS</button>
        <p align="center">{bedroomsCount}</p>
        <button onClick={incrementBedroomsCount}>PLUS</button>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">beds</p>
        <button onClick={decrementBedsCount}>MINUS</button>
        <p align="center">{bedsCount}</p>
        <button onClick={incrementBedsCount}>PLUS</button>
      </div>
      <br />
      <br />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p align="center">bathrooms</p>
        <button onClick={decrementBathroomsCount}>MINUS</button>
        <p align="center">{bathroomsCount}</p>
        <button onClick={incrementBathroomsCount}>PLUS</button>
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
      ))}

      <button onClick={handleSave} style={{ padding: "1rem" }}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
