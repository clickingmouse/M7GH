import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Majestic 7 Guesthouse
        </Link>
        <span className="right hide-on-med-and-down">
          <SignedInLinks />
          <SignedOutLinks />
          <ul className="right">
            <li>
              <a href="#">Our Rooms</a>
            </li>
            <li>
              <a href="#">Getting Here</a>
            </li>
            <li>
              <a href="#">Tips &amp; Guides</a>
            </li>
          </ul>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
