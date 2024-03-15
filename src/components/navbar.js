import React, { useState } from "react";
import wishlist from "./../Images/Wishlist.png";
import cartimg from "./../Images/cart2.png";
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
  const [tap, settap] = useState("false");
  const handletap = () => {
    settap(!tap);
  };
  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div className=" mb-24">
      {window.innerWidth > 768 ? (
        <header class="header-area header-sticky">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav class="main-nav">
                  <a href="/" class="logo pt-3">
                    <img src="assets/images/logo.png" />
                  </a>

                  <ul class="nav">
                    <li>
                      <a href="/" class="active">
                        Home
                      </a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="/productpage" className="basis-1/4 text-2xl">
                        Products
                      </a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="/about" className="basis-1/4 text-2xl">
                        About
                      </a>
                    </li>
                    <li class="scroll-to-section">
                      {!auth.user ? (
                        <>
                          <a className="basis-1/4 text-2xl" href="/signup">
                            Signup
                          </a>
                        </>
                      ) : (
                        <>
                          <a className="text-2xl" onClick={handlelogout}>
                            Logout
                          </a>
                        </>
                      )}
                    </li>
                    <li class="scroll-to-section">
                      <div className="flex gap-12 justify-between items-center">
                        <a>
                          <img src={wishlist} width={40} height={40}></img>
                        </a>
                        <Badge count={cart?.length} showZero>
                          <Link to="/cart">
                            <img
                              src={cartimg}
                              width={30}
                              height={30}
                              alt="Cart"
                            />
                          </Link>
                        </Badge>

                        <a href="/admin">
                          <img src={profile} width={30} height={30}></img>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <a class="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <div className="border shadow p-2 position-absolute w-full position-fixed top-0 z-10 bg-white">
          <div className="flex justify-between">
            <div>
              <img src="assets/images/logo.png" />
            </div>
            <div
              onClick={() => {
                handletap();
              }}
            >
              <img src="assets/images/menu.png" width={40} height={40} />
            </div>
          </div>
          {tap ? (
            <div className="flex flex-col items-center  mt-4 ">
              <ul className="text-2xl text-center text-black font-semibold">
                <li className="pb-4">
                  <a href="/">Home</a>
                </li>
                <li className="pb-4">
                  <a href="/productpage" className=" text-2xl">
                    Products
                  </a>
                </li>
                <li className="pb-4">
                  <a href="/about" className=" text-2xl">
                    About
                  </a>
                </li>
                <li className="pb-4">
                  {!auth.user ? (
                    <>
                      <a className=" text-2xl" href="/signup">
                        Signup
                      </a>
                    </>
                  ) : (
                    <>
                      <a className="text-2xl" onClick={handlelogout}>
                        Logout
                      </a>
                    </>
                  )}
                </li>
                <li>
                  <div className="items-center text-2xl flex flex-col pb-4">
                    <Badge count={cart?.length} showZero>
                      <a className="text-2xl pb-4" href="/cart">
                        Cart
                      </a>
                    </Badge>
                    <a className="pt-2" href="/admin">
                      Account
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Navbar;
