import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  const [tabs] = useState([
    { url: "", title: "Home" },
    { url: "ShopAll", title: "Shop All" },
    { url: "OurStory", title: "Our Story" },
    { url: "OurCraft", title: "Our Craft" },
    { url: "Contact", title: "Contact" },
  ]);
  const [socialIcons] = useState([
    <FaFacebookF />,
    <FaInstagram />,
    <FaTwitter />,
    <FaPinterestP />,
    <div className="nav-top--login-cart">
      <div>
        <span className="user-icon">
          <FaUserCircle />
        </span>
        <Link className="login" to="/Login">
          Log In
        </Link>
      </div>
      <span className="cart">Cart(0)</span>
    </div>,
    ,
  ]);
  const showHideNav = () => {
    var prevY = window.pageYOffset;
    window.onscroll = function () {
      var currentY = window.pageYOffset;
      //show on scroll up
      if (prevY > currentY) {
        document.getElementById("nav-section").style.top = "0px";
      }
      //hide on scroll down
      else {
        document.getElementById("nav-section").style.top = "-1000px";
      }
      prevY = currentY;
    };
  };
  useEffect(() => {
    showHideNav();
  }, []);
  const [activeTab, setActive] = useState("");
  return (
    <div id="nav-section">
      <div className="row nav-top">
        <div className="col-lg-4 col-12">
          <form className="search-box">
            <span className="search-icon">
              <FiSearch />
            </span>
            <input className="search" type="search" placeholder="Search..." />
          </form>
        </div>
        <div className="col-lg-4 col-2 nav-brand">adalene.</div>
        <div className="col-lg-4 col-10">
          <ul className="navbar-nav--head align-items-center">
            {socialIcons.map((element) => {
              return (
                <li key={Math.random() * 1000} className="nav-item--top">
                  <a className="nav-link--top" href="#">
                    {element}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm">
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav">
            {tabs.map((tab) => {
              return (
                <li
                  id={tab.url}
                  key={Math.random() * 1000}
                  className="nav-item"
                >
                  <Link
                    className={`${
                      activeTab == tab.url
                        ? "nav-link nav-link--active"
                        : "nav-link"
                    }`}
                    onClick={() => {
                      setActive(tab.url);
                    }}
                    to={`/${tab.url}`}
                  >
                    {tab.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
