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
  const [city, setCity] = useState("");

  const [guest, setGuest] = useState(1);
  const [bed, setBed] = useState(1);
  const [bedroom, setBedroom] = useState(1);
  const [bathroom, setBathroom] = useState(1);

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("category", category);
    newProduct.append("country", country);
    newProduct.append("city", city);
    newProduct.append("name", name);
    newProduct.append("street", street);
    newProduct.append("houseNumber", houseNumber);
    newProduct.append("guest", guest);
    newProduct.append("bed", bed);
    newProduct.append("bedroom", bedroom);
    newProduct.append("bathroom", bathroom);
    newProduct.append("img1", img1);
    newProduct.append("img2", img2);
    newProduct.append("img3", img3);
    newProduct.append("img4", img4);
    newProduct.append("img5", img5);
    newProduct.append("description", description);
    newProduct.append("price", price);

    createProduct(newProduct);
    console.log(newProduct);
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
        accept="image/*"
        style={{ marginBottom: "1rem" }}
        onChange={(e) => {
          setImg1(e.target.files[0]);
          setImg2(e.target.files[1]);
          setImg3(e.target.files[2]);
          setImg4(e.target.files[3]);
          setImg5(e.target.files[4]);
        }}
        type="file"
        placeholder="img"
      />

      <button onClick={handleSave} style={{ padding: "1rem" }}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
