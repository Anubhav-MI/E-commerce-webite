import React from "react";
import wishlist from "./../Images/Wishlist.png";
import cartimg from "./../Images/cart.png";
import profile from "./../Images/user.png";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Badge } from "antd";
const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const navigate = useNavigate();
  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div className="flex flex-row py-4 px-32 content-between justify-between border-b-2 border-black mb-16">
      <div>
        <h3 className="font-bold text-3xl text-center">Exclusive</h3>
      </div>
      <div className="flex flex-row gap-48">
        <a className="basis-1/4 text-2xl" href="/">
          Home
        </a>
        <a className="basis-1/4 text-2xl">Contact</a>
        <a className="basis-1/4 text-2xl">About</a>
        {!auth.user ? (
          <>
            {" "}
            <a className="basis-1/4 text-2xl" href="/signup">
              Register
            </a>
          </>
        ) : (
          <>
            <p className="text-2xl" onClick={handlelogout}>
              Logout
            </p>
          </>
        )}
      </div>
      {/* <div className="basis-1/4">
        <input
          className="bg-slate-200 py-1 px-4"
          placeholder="What are you looking for?"
          type="text"
        ></input>
      </div> */}
      <div className="flex gap-12 justify-center content-center">
        <a>
          <img src={wishlist} width={50} height={50}></img>
        </a>
        <Badge count={cart?.length} showZero>
          <Link to="/cart">
            <img src={cartimg} width={40} height={40} alt="Cart" />
          </Link>
        </Badge>

        <a href="/admin">
          <img src={profile} width={40} height={40}></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
