import React from "react";
import { NavLink, Route } from "react-router-dom";
import "../Navbar/Navbar.css";
import Stockpick from '../../containers/Stockpick/Stockpick';

const navbar = (props) => {
  return (
    <div className="Nav">
      <NavLink to="/">
        <div className="Nav-Logo">Stonks</div>
      </NavLink>
      <Route path="/" exact component={Stockpick} />
    </div>
  );
};

export default navbar;
