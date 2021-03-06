import React from "react";
import { NavLink } from "react-router-dom";
const SignedInLinks = () => {
  return (
    <ul class="right">
      <li>
        <NavLink to="/create-guide">New Post</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          KK
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
