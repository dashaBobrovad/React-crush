import React, { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode,
  className?: string,
  [x:string]: any;
}


function Button({ children, className = '', ...rest }: ButtonProps) {
  // вынести button в глобальные стили 
  return (
    <button
      className={`button ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;