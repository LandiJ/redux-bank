import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function BaseLayout({ children }) {
  return (
    <div>
      <div className="navBar">
        <NavLink className="navBtn" to="/">Home</NavLink>
        <NavLink className="navBtn" to="/users">Users</NavLink>
      </div>
      <div>
        {children}
      </div>

    </div>
  );
}

export default BaseLayout;
