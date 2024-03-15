import React from "react";
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
  const handlelogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a href="/" class="logo pt-3">
                <img src="assets/images/logo.png" />
              </a>

              <ul class="nav">
                <li class="scroll-to-section">
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
                        <img src={cartimg} width={30} height={30} alt="Cart" />
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
  );
};

export default Navbar;
