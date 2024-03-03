import React from "react";
import laptop from "../Images/product.png";
import p2 from "../Images/product2.png";
import axios from "axios";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setproducts] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("http://localhost:3001/products/get");
      setproducts(data);
      console.log(products);
      // console.log(products.data[0].title);
    };
    fetchdata();
  }, []);
  return (
    <div className="min-h-100 py-12 px-32">
      <div>Our Products</div>
      <div>Explore our Products</div>
      <div className="grid grid-cols-4 gap-4">
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
  );
};

export default Product;
