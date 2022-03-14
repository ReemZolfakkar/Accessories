import React, { useState, useEffect ,useRef} from "react";
import NavbarLarge from "./Navbar_Large_Screens";
import NavbarSmall from "./Navbar_Small_Screens";

import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

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
  ]);
  function getWindowWidth() {
    const width = window.innerWidth;
    return width;
  }
  function handleResize() {
    setWidth(getWindowWidth());
  }
  const [width, setWidth] = useState(getWindowWidth());
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width > 500 ? (
        <NavbarLarge socialIcons={socialIcons} tabs={tabs}/>
      ) : (
        <NavbarSmall socialIcons={socialIcons} tabs={tabs}/>
      )}
    </>
  );
}

export default Navbar;
