import React from "react";
import classes from "./BuildControl.css";
import PropTypes from "prop-types";

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
  </div>
);

buildControl.propTypes = {
  label: PropTypes.string,
  removed: PropTypes.func,
  added: PropTypes.func,
  disabled: PropTypes.bool,
};
export default buildControl;
