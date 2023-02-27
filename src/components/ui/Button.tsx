import React, { ReactNode } from 'react';

interface ButtonProps {
  onClick?: () => void,
  children?: ReactNode,
  className?: string,
}


function Button({ onClick, children, className = '' }: ButtonProps) {
  // вынести button в глобальные стили 
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;