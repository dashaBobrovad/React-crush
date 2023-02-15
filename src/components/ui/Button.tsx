import React, { ReactNode } from 'react';
import s from '../../assets/scss/Button.module.scss';

interface ButtonProps {
  onClick?: () => void,
  children?: ReactNode,
  className?: string,
  modifyClass?: string;
}
function Button({ onClick, children, className, modifyClass }: ButtonProps) {
  return (
    <button 
      className={`${className} ${s.button} ${s[`button--${modifyClass}`]}`}  
      onClick={onClick}>
        {children}
    </button>
  );
}

export default Button;