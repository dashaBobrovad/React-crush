import React, { ReactNode } from "react";

interface ButtonProps {
  children: undefined | ReactNode;
  className: null | string;
  [x: string]: any;
}

function Button({ children, className = "", ...rest }: ButtonProps) {
  // вынести button в глобальные стили
  return (
    // TODO: избавиться от eslint-disable-next-line
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className={`button ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
