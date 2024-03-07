import React, { useState } from "react";
import axios from "axios";
const ManageCategory = () => {
  const [category, setcategory] = useState("");
  const handlesubmit = () => {
    const response = axios
      .post("http://localhost:3001/createcategory", {
        name: category,
      })
      .then(() => {
        setcategory("");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div>
      {" "}
      <div className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end py-28 ">
        <p>Add new Category</p>
        <input
          className="p-2 m-2"
          placeholder="Enter category name"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        ></input>

        <button
          type="submit"
          onClick={handlesubmit}
          class="btn btn-outline-warning"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default ManageCategory;
