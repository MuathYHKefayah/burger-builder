import React from "react";
import classes from "./DrawerToggle.css";
import PropTypes from "prop-types";

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

drawerToggle.propTypes = {
  clicked: PropTypes.func
};
export default drawerToggle;
