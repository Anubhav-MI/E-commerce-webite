import React from "react";
import wishlist from "./../Images/Wishlist.png";
import cart from "./../Images/cart.png";
import profile from "./../Images/user.png";
import { useAuth } from "../context/auth";
const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div className="flex flex-row py-4 px-2">
      <div className="basis-1/4">
        <h3 className="font-bold text-lg text-center">Exclusive</h3>
      </div>
      <div className="flex flex-row basis-2/4">
        <a className="basis-1/4" href="/">
          Home
        </a>
        <a className="basis-1/4">Contact</a>
        <a className="basis-1/4">About</a>
        {!auth.user ? (
          <>
            {" "}
            <a className="basis-1/4" href="/signup">
              Sign up
            </a>
          </>
        ) : (
          <>
            <p onClick={handlelogout}>logout</p>
          </>
        )}
      </div>
      <div className="basis-1/4">
        <input
          className="bg-slate-200 py-1 px-4"
          placeholder="What are you looking for?"
          type="text"
        ></input>
      </div>
      <div className="basis-1/4">
        <div className="flex gap-4">
          <a>
            <img src={wishlist} width={50} height={50}></img>
          </a>
          <a>
            <img src={cart} width={40} height={40}></img>
          </a>
          <a href="/admin">
            <img src={profile} width={40} height={40}></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
