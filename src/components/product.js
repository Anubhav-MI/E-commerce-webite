import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Checkbox } from "antd";
import { useCart } from "../context/cart";
import { baseURL } from "./baseURL";
import toast from "react-hot-toast";

const Product = () => {
  const [products, setproducts] = useState("");
  const [avcategory, setavcategory] = useState([]);
  const [cart, setCart] = useCart();

  const getcategory = async () => {
    try {
      const data = await axios.get(`${baseURL}/getcategory`);
      setavcategory(data.data);
      console.log(avcategory);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get(`${baseURL}/products/get`);
      setproducts(data);
      // console.log(products);
      // console.log(products.data[0].title);
      getcategory();
    };
    fetchdata();
  }, []);
  return (
    <div>
      <div className="min-h-100 md:py-12 md:px-32 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24">
          {products &&
            products?.data.map((product) => (
              <div className="p-4 hover:border shadow flex-col content-between ">
                <div>
                  <img className="" src={product.imgURL} alt="..." />
                </div>

                <div className="mt-4 py-3">
                  <h5 class=" text-xl pb-4">{product.title}</h5>

                  <p class="text-xl font-semibold pb-4">₨.{product.price}</p>

                  <div className="flex justify-between pb-4">
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
                      <button class="btn btn-primary text-xl">
                        Add to cart
                      </button>
                    </button>
                    <p class="text-xl rounded bg-green-600 text-white py-1 px-3">
                      {product.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
