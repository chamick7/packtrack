import React, { ButtonHTMLAttributes, Children } from "react";
import "./square-button.scss";

const SquareButton = ({ ...otherProps }) => {
  return (
    <div>
      <button {...otherProps} className=""></button>
    </div>
  );
};

export default SquareButton;
