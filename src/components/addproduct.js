import React, { useState } from "react";
import axios from "axios";
const Addproduct = () => {
  const [title, settitle] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [price, setprice] = useState(0);
  const [rating, setrating] = useState(0);
  const handlesubmit = () => {
    const response = axios
      .post("http://localhost:3001/products/add", {
        title,
        imgURL,
        price,
        rating,
      })
      .then(() => {
        settitle("");
        setimgURL("");
        setprice(0);
        setrating(0);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <input
        placeholder="Enter product name"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      ></input>
      <input
        placeholder="Enter Image url"
        onChange={(e) => setimgURL(e.target.value)}
        value={imgURL}
      ></input>
      <input
        placeholder="Enter price"
        onChange={(e) => setprice(e.target.value)}
        value={price}
      ></input>
      <input
        placeholder="Enter rating"
        onChange={(e) => setrating(e.target.value)}
        value={rating}
      ></input>
      <button type="button" onClick={handlesubmit} class="btn">
        Add Product
      </button>
    </div>
  );
};

export default Addproduct;
