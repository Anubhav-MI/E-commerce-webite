import React from "react";
import Hero from "./hero";
import Product from "./product";
import categoryimg from "../Images/category.png";
import arrival from "../Images/arrival.png";
import rect from "../Images/Rect.png";
import banner from "../Images/banner.png";
import feat from "../Images/feat.png";
import { Toaster } from "react-hot-toast";
import Explore from "./explore";
const Home = () => {
  //
  return (
    <div>
      <div className="App gap-32 flex flex-col items-center justify-center">
        <Hero />
        <div>
          <div className="flex gap-3 items-center w-full">
            <img src={rect} width={20}></img>
            <p className="font-bold text-xl text-rose-600">Our Products</p>
          </div>
          <div className="mb-5">
            <p className="text-5xl font-bold">Explore our products</p>
          </div>
          <Product />
        </div>
        <Explore />
        <div className=" flex item-center mb-12">
          <img src={feat} width={1500}></img>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Home;
