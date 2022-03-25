import React from "react";
import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaFacebook,
  FaGooglePlus,
  FaLaptop,
  FaLinkedin,
  FaMapMarked,
  FaMobile,
  FaPhoneAlt,
  FaPrint,
  FaTv,
  FaTwitter,
  FaUsb,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pt-5 pb-4 main-footer">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          {/* column 1 */}
          <div className="col-md-3 col-sm-6 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Mobile Square
            </h5>
            <p className="align-text-justify">
              Mobile Square is a mobile App store built on react javascript for
              with well automated functions to accommodate all your e-commerce
              app needs from safety to size.
            </p>
          </div>
          {/* column 2 */}
          <div className="col-md-2 col-sm-6 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Products</h5>
            <p>
              <Link to="#">
                <span className="cart-icon">
                  <FaMobile />
                </span>{" "}
                Mobile Devices
              </Link>
            </p>
            <p>
              <Link to="#">
                <span className="cart-icon">
                  <FaLaptop />
                </span>{" "}
                Laptops
              </Link>
            </p>
            <p>
              <Link to="#">
                <span className="cart-icon">
                  <FaTv />
                </span>{" "}
                Appliances
              </Link>
            </p>
            <p>
              <Link to="#">
                <span className="cart-icon">
                  <FaUsb />
                </span>{" "}
                Accessories
              </Link>
            </p>
          </div>
          {/* column 3 */}
          <div className="col-md-3 col-sm-6 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Useful Links
            </h5>
            <p>
              <a href="#">Become an affiliate</a>
            </p>
            <p>
              <a href="#">Shipping Rates</a>
            </p>
            <p>
              <a href="#">Exchange Rate</a>
            </p>
            <p>
              <a href="#">Help</a>
            </p>
          </div>
          {/* column 4 */}
          <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
            <p>
              <Link to="https://www.twitter.com">
                <span className="cart-icon">
                  <FaMapMarked />
                </span>{" "}
                No. 1 Victoria Boulevard
              </Link>
            </p>
            <p>
              <Link to="https://www.gmail.com">
                <span className="cart-icon">
                  <FaEnvelope />
                </span>{" "}
                msquare@gmail.com
              </Link>
            </p>
            <p>
              <Link to="https://www.insta.com">
                <span className="cart-icon">
                  <FaPhoneAlt />
                </span>{" "}
                +234 0706 627 0034
              </Link>
            </p>
            <p>
              <Link to="https://www.twitter.com/mobilesquare">
                <span className="cart-icon">
                  <FaPrint />
                </span>{" "}
                +01 234 5678 900
              </Link>{" "}
            </p>
          </div>
        </div>
        {/* Footer Bottom */}
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              &copy; {new Date().getFullYear()}{" "}
              <span className="main-yellow">Mobile Square App</span> - All
              Rights Reserved
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item p-1">
                  <span className="btn-floating ">
                    <Link
                      to="https://www.twitter.com/Charlesoriih"
                      className="fa-Iconz"
                    >
                      <FaTwitter />
                    </Link>
                  </span>
                </li>
                <li className="list-inline-item p-1">
                  <span className="btn-floating">
                    <Link to="https://www.facebook.com" className="fa-Iconz">
                      <FaFacebook />
                    </Link>
                  </span>
                </li>
                <li className="list-inline-item p-1">
                  <span className="btn-floating">
                    <Link to="https://www.linkedin.com" className="fa-Iconz">
                      <FaLinkedin />
                    </Link>
                  </span>
                </li>
                <li className="list-inline-item p-1">
                  <span className="btn-floating">
                    <Link to="https://www.googleplus.com" className="fa-Iconz">
                      <FaGooglePlus />
                    </Link>
                  </span>
                </li>
                <li className="list-inline-item p-1">
                  <span className="btn-floating">
                    <Link to="https://www.youtube.com" className="fa-Iconz">
                      <FaYoutube />
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
