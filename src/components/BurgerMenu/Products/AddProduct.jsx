import React, { useState } from "react";

const AddProduct = () => {
  const [type, setType] = useState("");

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

  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  console.log(
    type,
    country,
    name,
    street,
    houseNumber,
    city,

    // guest,
    // bed,
    // bedroom,
    // bathroom,

    img1,
    img2
  );

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("type", type);
    newProduct.append("country", country);
    newProduct.append("name", name);
    newProduct.append("street", street);
    newProduct.append("houseNumber", houseNumber);
    newProduct.append("city", city);
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
      <input
        onChange={(e) => setType(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem", marginTop: "1rem" }}
        type="text"
        placeholder="type"
      />
      <input
        onChange={(e) => setCountry(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="country"
      />
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

      <input
        onChange={(e) => setGuest(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="guests"
      />
      <input
        onChange={(e) => setBedroom(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="bedroom"
      />
      <input
        onChange={(e) => setBed(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="bed"
      />
      <input
        onChange={(e) => setBathroom(e.target.value)}
        style={{ marginBottom: "1rem", padding: "1rem" }}
        type="text"
        placeholder="bathroom"
      />
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
