import React from "react";
import FancyBorder from "./fancyBorder";
import PropTypes from "prop-types";
import "./style.css";

const Dialog = props => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  children: PropTypes.array
};

export default Dialog;
