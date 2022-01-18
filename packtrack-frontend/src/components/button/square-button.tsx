import React, { ButtonHTMLAttributes, Children } from "react";
import "./button.scss"


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    // border: string;
    // color: string;
    // height: string;
    // radius: string
    // width: string;
}

const SquareButton: React.FC<Props> = ({    
    // border,
    // color,
    // height,
    // radius,
    // width,
...otherProps }) => {
  return (
    <div>
      <button {...otherProps}  
    //   style={{
    //      backgroundColor: color,
    //      border,
    //      borderRadius: radius,
    //      height,
    //      width
    //   }}
    className="square-button-login"
      ></button>
    </div>
  );
};

export default SquareButton;
