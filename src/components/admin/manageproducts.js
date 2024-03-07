import React, { useState, useEffect } from "react";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

const Manageproducts = () => {
  const [title, settitle] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [price, setprice] = useState("");
  const [rating, setrating] = useState("");
  const [category, setcategory] = useState("");
  const [avcategory, setavcategory] = useState([]);
  const [products, setproducts] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:3001/products/get");
      setproducts(data);
      //   console.log(products);
      getcategory();
      // console.log(products.data[0].title);
    };
    fetchdata();
  }, []);

  const getcategory = async () => {
    try {
      const data = await axios.get("http://localhost:3001/getcategory");
      setavcategory(data.data);
      console.log(avcategory);
    } catch (error) {
      console.log(error);
    }
  };

  const handlesubmit = () => {
    const response = axios
      .post("http://localhost:3001/products/add", {
        title,
        imgURL,
        price,
        rating,
        category,
      })
      .then(() => {
        alert("Product added");
        settitle("");
        setimgURL("");
        setprice(0);
        setrating(0);
        setcategory("");
      })
      .catch((error) => alert(error.message));
  };

  const handledelete = async (id) => {
    if (window.confirm("Are you sure u want to delete this user?")) {
      try {
        const data = await axios.post(
          "http://localhost:3001/products/deleteproduct",
          {
            _id: id,
          }
        );
        alert("Deleted Successfully");
        window.location.reload();
      } catch (error) {
        console.log(error);
        alert("Something went wrong");
      }
    } else {
      return;
    }
  };

  return (
    <div className="m-16 p-9">
      <div className="flex gap-6">
        <div class="mb-3 w-full max-w-96">
          <label for="exampleFormControlInput1" class="form-label">
            Product name
          </label>
          <input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Product name"
          />
        </div>
        <div class="mb-3  w-full max-w-96">
          <label for="exampleFormControlInput1" class="form-label">
            Image url
          </label>
          <input
            value={imgURL}
            onChange={(e) => {
              setimgURL(e.target.value);
            }}
            type="url"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="www.exampleimage.com"
          />
        </div>
      </div>
      <div className="flex gap-6">
        {" "}
        <div class="mb-3 w-full max-w-96">
          <label for="exampleFormControlInput1" class="form-label">
            Price
          </label>
          <input
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
            type="price"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="250"
          />
        </div>
        <div class="mb-3 w-full max-w-96">
          <label for="exampleFormControlInput1" class="form-label">
            Rating
          </label>
          <input
            value={rating}
            onChange={(e) => {
              setrating(e.target.value);
            }}
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="4.5"
          />
        </div>
      </div>
      <div className="m-1  w-full max-w-96">
        <Select
          bordered={false}
          placeholder="Select a category"
          size="large"
          showSearch
          className="form-select mb-3"
          onChange={(value) => {
            setcategory(value);
          }}
        >
          {avcategory?.map((c) => (
            <Option key={c._id} value={c.category}>
              {" "}
              {c.category}
            </Option>
          ))}
        </Select>
      </div>
      {/* <div class="mb-3 w-full max-w-96">
        <label for="exampleFormControlInput1" class="form-label">
          Category
        </label>
        <input
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
          type="name"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Laptops"
        />
      </div> */}
      <button onClick={handlesubmit} type="button" class="btn btn-warning ">
        Submit
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Rating</th>
            <th scope="col">Options</th>
          </tr>
        </thead>

        {products &&
          products?.data.map((product) => (
            <tbody>
              <tr>
                <th scope="row">#</th>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                {/* <td>{user.rating}</td> */}
                <td>
                  <button
                    onClick={() => handledelete(product._id)}
                    type="button"
                    class="rounded-lg bg-red-600 py-2 px-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
};

export default Manageproducts;
