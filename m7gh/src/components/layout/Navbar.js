import React from "react";
import { Link, NavLink } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
//import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  //const { auth } = props;
  //console.log(auth)
  const links = auth.uid ? (
    <SignedInLinks profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <nav className="nav-extended grey grey-darken-1">
      <div className="container">
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo ">
            Majestic 7 Guesthouse
          </NavLink>
          {links}
          <a href="" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>
        </div>

        <div className="nav-content">
          <div className="hide-on-small-only">
            <ul className="tabs tabs-transparent">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/our-rooms">Our Rooms</NavLink>
              </li>
              <li>
                <NavLink to="/around-us">AroundUs</NavLink>
              </li>
              <li>
                <NavLink to="/getting-here">Getting Here</NavLink>
              </li>

              <li>
                <NavLink to="/guides">Guides</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <ul className="sidenav grey lighten-2" id="mobile-menu">
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
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navbar);
