import React from "react";
import Hero from "./hero";
import Product from "./product";
import categoryimg from "../Images/category.png";
import arrival from "../Images/arrival.png";
import rect from "../Images/Rect.png";
import banner from "../Images/banner.png";
import feat from "../Images/feat.png";
import { Toaster } from "react-hot-toast";
const Home = () => {
  //
  return (
    <div>
      <div className="App px-48 pb-48 gap-32 flex flex-col items-center justify-center">
        <Hero />
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <img src={rect} width={20}></img>
            <p className="font-bold text-xl text-rose-600">Category</p>
          </div>
          <div className="mb-5">
            <p className="text-5xl font-bold">Browse by Category</p>
          </div>
          <div className="flex align-content-lg-center justify-center">
            <img src={categoryimg} width={2000}></img>
          </div>
        </div>
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

        <img src={banner}></img>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <img src={rect} width={20}></img>
            <p className="font-bold text-xl text-rose-600">Featured</p>
          </div>
          <div className="mb-5">
            <p className="text-5xl font-bold">New Arrival</p>
          </div>
          <div className="flex align-content-lg-center justify-center">
            <img src={arrival} width={2000}></img>
          </div>
        </div>
        <div className=" flex item-center">
          <img src={feat} width={1500}></img>
        </div>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

export default Home;
