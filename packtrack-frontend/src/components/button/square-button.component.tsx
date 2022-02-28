import React, { ButtonHTMLAttributes, Children } from "react";

const SquareButton = ({ ...otherProps }) => {
  return (
    <div>
      <button {...otherProps} className=""></button>
    </div>
  );
};

export default SquareButton;
