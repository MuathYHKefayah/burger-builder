import React from "react";
import classes from "./NavigationItem.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <NavLink to={props.link} activeClassName={classes.active} exact>
      {props.children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string,
  active: PropTypes.bool,
};

export default navigationItem;
