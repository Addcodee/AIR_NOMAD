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

  const [category, setCategory] = useState("");

  // дом , ферма ...
  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
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
    newProduct.append("country", country);
    newProduct.append("name", name);
    newProduct.append("street", street);
    newProduct.append("houseNumber", houseNumber);
    newProduct.append("city", city);
    newProduct.append("guest", guest);
    newProduct.append("bed", bed);
    newProduct.append("bedroom", bedroom);
    newProduct.append("bathroom", bathroom);
    newProduct.append("imgs", imgs);
    // newProduct.append("img2", img2);
    // newProduct.append("img3", img3);
    // newProduct.append("img4", img4);
    // newProduct.append("img5", img5);
    newProduct.append("description", description);
    newProduct.append("price", price);

    createProduct(newProduct);
  }

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
        <option
          style={{ marginBottom: "1rem", padding: "1rem" }}
          value=""
        >
          choose category
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
        onChange={(e) => setCity(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="city"
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
