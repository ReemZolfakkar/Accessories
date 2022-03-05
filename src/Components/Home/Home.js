import React, { useState, useEffect } from "react";
import ProductCard from "../ShopAll/ProductCard";
import i2 from "../../Images/home_2.webp";
import i3 from "../../Images/home_3.webp";
import i4 from "../../Images/home_6.webp";
import i5 from "../../Images/home_7.webp";
import i6 from "../../Images/home_8.webp";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";

function Home() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  function getWindowWidth() {
    const width = window.innerWidth;
    return width;
  }
  function handleResize() {
    setWidth(getWindowWidth());
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [width, setWidth] = useState(getWindowWidth());
  const products = [
    {
      id: 1,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    {
      id: 2,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    ,
    {
      id: 3,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    ,
    {
      id: 4,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    ,
    {
      id: 5,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    ,
    {
      id: 6,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    ,
    {
      id: 7,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    ,
    {
      id: 8,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
    ,
    {
      id: 9,
      imgurl: "../../Images/bag1.jpg",
      name: "leatherbag",
      price: "399",
      colors: ["red"],
    },
  ];
  const [section3Data, setSection3Data] = useState([
    {
      title1: "Family Owned",
      title2: "BRAND",
      btn: "Read our story",
      navTo: "/OurStory",
      imgSrc: i4,
    },
    {
      title1: "Hand Crafted",
      title2: "PRODUCTS",
      btn: "About our leather",
      navTo: "/OurCraft",
      imgSrc: i5,
    },
    {
      title1: "Created in the",
      title2: "USA",
      btn: "Contact our team",
      navTo: "/Contact",
      imgSrc: i6,
    },
  ]);
  return (
    <>
      <header className="home-header">
        <h1 className="home-header__title">CUE THE COLOR</h1>
        <div className="text-center">
          <Link to={"/ShopAll"}>
            <button className="home-header__button">Shop the collection</button>
          </Link>{" "}
        </div>
      </header>
      <div className="home-carousel">
        <h4 className="sub-title">Best Sellers</h4>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          activePosition={"center"}
          numberOfCards={width > 1100 ? 4 : width < 800 ? 2 : 3}
          gutter={20}
          leftChevron={<button>{"<"}</button>}
          rightChevron={<button>{">"}</button>}
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {products.map((value) => {
            return (
              <React.Fragment key={value.id}>
                <ProductCard Product={value} />
              </React.Fragment>
            );
          })}
        </ItemsCarousel>
        <div className="text-center">
          <Link to={"/ShopAll"}>
            <button type="button" className="home-button" onClick={() => {}}>
              Shop All Bags
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="row pic-sections">
        <div className="col-6 bg-beige fixed-section">
          <img src={i2} />
          <p>I'm a product</p>
          <h6>$100.00</h6>
        </div>
        <div className="col-6 movable-section">
          <img style={{ height: "700px", width: "100%" }} src={i3} />
          <h5> MINI LEATHER GOODS</h5>
        </div>
        <div className="col-6 bg-beige fixed-section">
          <img src={i2} />
          <p>I'm a product</p>
          <h6>$100.00</h6>
        </div>
        <div className="col-6 bg-beige fixed-section">
          <img src={i2} />
          <p>I'm a product</p>
          <h6>$100.00</h6>
        </div>
      </div>
       */}
      <div className="row section-3">
        {section3Data.map((item, index) => {
          return (
            <div
              key={index}
              className="col-lg-3 col-sm-7 col-10 section-3__card"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)),url(${item.imgSrc})`,
              }}
            >
              <div className="section-3__card__content">
                <h5 className="section-3__card__content__title1">
                  {item.title1}
                </h5>
                <h4 className="section-3__card__content__title2">
                  {item.title2}
                </h4>
                <Link to={item.navTo}>
                  <span className="section-3__card__content__btn">
                    {item.btn}</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default React.memo(Home);
