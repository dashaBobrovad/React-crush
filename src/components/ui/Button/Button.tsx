import React, { ReactNode } from "react";
// import s from "./Button.module.scss";

interface ButtonProps {
  children: undefined | ReactNode;
  className: null | string;
  [x: string]: any;
}

function Button({ children, className = "", ...rest }: ButtonProps) {
  return (
    <button type="button" className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
