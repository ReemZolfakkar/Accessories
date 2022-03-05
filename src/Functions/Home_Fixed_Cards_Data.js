
import i1 from "../Images/home_6.webp";
import i2 from "../Images/home_7.webp";
import i3 from "../Images/home_8.webp";
import i4 from "../Images/home_11.jpg";
import i5 from "../Images/home_12.jpg";
import i6 from "../Images/home_13.jpg";
import i7 from "../Images/home_14.jpg";
import i8 from "../Images/home_15.jpg";
export default function Home_Fixed_Cards_Data() {
  return {
    imgCards: [
      {
        id: 1,
        imgurl: i4,
      },
      {
        id: 2,
        imgurl: i5,
      },
      {
        id: 3,
        imgurl: i6,
      },
      {
        id: 4,
        imgurl: i7,
      },
      {
        id: 5,
        imgurl: i8,
      },
      {
        id: 6,
        imgurl: i4,
      },
      {
        id: 7,
        imgurl: i5,
      },
      {
        id: 8,
        imgurl: i6,
      },
      {
        id: 9,
        imgurl: i7,
      },
      {
        id: 10,
        imgurl: i8,
      },
    ],
    section3Data: [
        {
          title1: "Family Owned",
          title2: "BRAND",
          btn: "Read our story",
          navTo: "/OurStory",
          imgSrc: i1,
        },
        {
          title1: "Hand Crafted",
          title2: "PRODUCTS",
          btn: "About our leather",
          navTo: "/OurCraft",
          imgSrc: i2,
        },
        {
          title1: "Created in the",
          title2: "USA",
          btn: "Contact our team",
          navTo: "/Contact",
          imgSrc: i3,
        },
      ]
  };
}
