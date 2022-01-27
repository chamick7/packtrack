import React, { ButtonHTMLAttributes, Children } from "react";
import "./square-button.scss";

const SquareButton = ({ ...otherProps }) => {
  return (
    <div>
      <button {...otherProps} className="square-button-login"></button>
    </div>
  );
};

export default SquareButton;
