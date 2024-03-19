import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="md:pl-20">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="first-item">
                <div class="logo ml-20 pb-8 md:pb-0 md:ml-0">
                  <img
                    src="assets/images/white-logo.png"
                    alt="hexashop ecommerce templatemo"
                  />
                </div>
                <ul>
                  <li>
                    <Link to="/">NIT Hamirpur,Himachal Pradesh, India</Link>
                  </li>
                  <li>
                    <Link to="/">hexashop@company.com</Link>
                  </li>
                  <li>
                    <Link to="/">010-020-0340</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3">
              <h4>Shopping &amp; Categories</h4>
              <ul>
                <li>
                  <Link to="/">Laptops</Link>
                </li>
                <li>
                  <Link to="/">Mobiles</Link>
                </li>
                <li>
                  <Link to="/">Headphones</Link>
                </li>
                <li>
                  <Link to="/">Accessories</Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/">Homepage</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">Products</Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-3">
              <h4>Help &amp; Information</h4>
              <ul>
                <li>
                  <Link to="/">Help</Link>
                </li>
                <li>
                  <Link to="/">FAQ's</Link>
                </li>
                <li>
                  <Link to="/">Shipping</Link>
                </li>
                <li>
                  <Link to="/">Tracking ID</Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-12">
              <div class="under-footer">
                <p>
                  Copyright © 2024 HexaShop Co., Ltd. All Rights Reserved.
                  <br />
                  Design:
                  <p>Bootstrap</p>
                </p>
                <ul>
                  <li>
                    <Link to="/">
                      <i class="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i class="fa fa-behance"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
