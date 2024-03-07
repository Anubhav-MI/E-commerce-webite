import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Checkbox } from "antd";

const Product = () => {
  const [products, setproducts] = useState("");
  const [avcategory, setavcategory] = useState([]);

  const getcategory = async () => {
    try {
      const data = await axios.get("http://localhost:3001/getcategory");
      setavcategory(data.data);
      console.log(avcategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:3001/products/get");
      setproducts(data);
      // console.log(products);
      // console.log(products.data[0].title);
      getcategory();
    };
    fetchdata();
  }, []);
  return (
    <div className="flex justify-between content-end">
      <div className="flex flex-col">
        {avcategory?.map((c) => (
          <Checkbox key={c._id}>{c.name}</Checkbox>
        ))}
      </div>
      <div className="min-h-100 py-12 px-32">
        <div className="grid grid-cols-4 gap-32">
          {products &&
            products?.data.map((product) => (
              <div class="card" className="w-[18rem]">
                <img src={product.imgURL} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.price}</p>
                  <p class="card-text">{product.rating}</p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
