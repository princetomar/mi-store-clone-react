import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
// import { logo } from "../data/data.json";
import data from "../data/data.json";

const Navbar = () => {
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
    </svg>
  );
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/as">
          <img id="logoImage" src={data.logo} alt="Not" />
        </Link>
      </div>
      {/* /The Anchor tags in navbar */}
      {/* 1 */}
      <Link className="navLinks" href="/miphones">
        Mi Phones
      </Link>
      {/* 2 */}
      <Link className="navLinks" href="/redmiphones">
        Redmi Phones
      </Link>
      {/* 3 */}
      <Link className="navLinks" href="/tv">
        TV
      </Link>
      {/* 4 */}
      <Link className="navLinks" href="/laptops">
        Laptops
      </Link>
      {/* 5 */}
      <Link className="navLinks" href="/lifestyle">
        Fitness & Lifestyle
      </Link>
      {/* 6 */}
      <Link className="navLinks" href="/home">
        Home
      </Link>
      {/* 7 */}
      <Link className="navLinks" href="/audio">
        Radio
      </Link>
      {/* 8 */}
      <Link className="navLinks" href="/accessories">
        Accessories
      </Link>

      {/* Search Box */}

      <div className="searchbox">
        <input placeholder="Search Products" type="text" name="search" />
      </div>
      {searchIcon}
    </div>
  );
};

export default Navbar;
