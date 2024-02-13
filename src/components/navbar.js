import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row py-4 px-2">
      <div className="basis-1/4">
        <h3 className="font-bold text-lg text-center">Exclusive</h3>
      </div>
      <div className="flex flex-row basis-2/4">
        <a className="basis-1/4">Home</a>
        <a className="basis-1/4">Contact</a>
        <a className="basis-1/4">About</a>
        <a className="basis-1/4">Sign up</a>
      </div>
      <div className="basis-1/4">
        <input
          className="bg-slate-200 py-1 px-4"
          placeholder="What are you looking for?"
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default Navbar;
