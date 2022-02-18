import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ShopAll">
              Shop All
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/OurStory">
              Our Story
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/OurCraft">
              Our Craft
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      */}
      </div>
    </nav>
  );
}

export default Navbar;
