import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      {" "}
      <footer class="footer">
        <div class="container grid grid--footer">
          <div class="logo-col">
            <h3 class="footer-heading">Exclusive</h3>
            <ul class="social-links">
              <li>
                <a class="footer-link" href="#">
                  <ion-icon
                    class="social-icons"
                    name="logo-instagram"
                  ></ion-icon>
                </a>{" "}
              </li>
              <li>
                <a class="footer-link" href="#">
                  <ion-icon
                    class="social-icons"
                    name="logo-facebook"
                  ></ion-icon>
                </a>{" "}
              </li>
              <li>
                <a class="footer-link" href="#">
                  <ion-icon class="social-icons" name="logo-twitter"></ion-icon>
                </a>{" "}
              </li>
            </ul>
            <p class="copyright">
              Copyright &copy; by Omnifood Inc. All rights reserved.
            </p>
          </div>
          <div class="adress-col">
            <p class="footer-heading">Support</p>
            <address class="contacts">
              <p>623 Harrison St., 2nd Floor, San Francisco, CA 94107</p>
              <a class="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <a class="footer-link" href="mailto: hello@omnifood.com">
                {" "}
                hello@omnifood.com
              </a>
            </address>
          </div>
          <nav class="nav-col">
            <p class="footer-heading">Accounts</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  Create account
                </a>{" "}
              </li>
              <li>
                <a class="footer-link" href="#">
                  Sign in
                </a>{" "}
              </li>
              <li>
                <a class="footer-link" href="#">
                  iOS app
                </a>{" "}
              </li>
              <li>
                <a class="footer-link" href="#">
                  Android app
                </a>{" "}
              </li>
            </ul>
          </nav>
          <nav class="nav-col">
            <p class="footer-heading">Company</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  About Omnifood
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  {" "}
                  For Business
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Cooking partners
                </a>
              </li>
              <li>
                <a class="footer-link" href="#">
                  Careers
                </a>{" "}
              </li>
            </ul>
          </nav>{" "}
          <nav class="nav-col">
            <p class="footer-heading">Resources</p>
            <ul class="footer-nav">
              <li>
                <a class="footer-link" href="#">
                  {" "}
                  Recipe directory
                </a>{" "}
              </li>
              <li>
                <a class="footer-link" href="#">
                  {" "}
                  Help center
                </a>{" "}
              </li>
              <li>
                <a class="footer-link" href="#">
                  {" "}
                  Privacy & terms
                </a>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
