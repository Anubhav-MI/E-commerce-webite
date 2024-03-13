import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Checkbox } from "antd";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";

const ProductPage = () => {
  const [products, setproducts] = useState("");
  const [avcategory, setavcategory] = useState([]);
  const [cart, setCart] = useCart();

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
    <div>
      <div class="page-heading" id="top">
        <div class="container mb-24">
          <div class="row">
            <div class="col-lg-12">
              <div class="inner-content">
                <h2>Check Our Products</h2>
                <span>
                  Browse through our products and find the best one for you.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-16">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-heading">
              <h2>Our Latest Products</h2>
              <span>Check out all of our products.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-100 py-12 px-32 ">
        <div className="grid grid-cols-4 gap-32">
          {products &&
            products?.data.map((product) => (
              <div class="card" className="w-[22rem] h-[36rem]">
                <img
                  src={product.imgURL}
                  width={350}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                  <p class="card-text">{product.price}</p>
                  <p class="card-text">{product.rating}</p>
                  <div className="flex gap-10">
                    <a href="#" class="btn btn-primary">
                      More Details
                    </a>
                    <button
                      onClick={() => {
                        setCart([...cart, product]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("Item added to cart");
                      }}
                    >
                      <button class="btn btn-primary">Add to cart</button>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
