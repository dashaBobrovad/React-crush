import React, { ReactNode } from 'react';
import s from '../../assets/scss/components/ui/Button.module.scss';

interface ButtonProps {
  onClick?: () => void,
  children?: ReactNode,
  cl?: string,
  modifyClass?: string[];
}


function Button({ onClick, children, cl = '', modifyClass }: ButtonProps) {
  // вынести в хелперы (+ спросить, норм ли это тема вообще)
  function makeClass(modifyClass: string[] =  []) {
    return modifyClass && (modifyClass?.map((cl: string) => 
      [s[`button--${cl}`]]
    ).join(' '));
  }

  return (
    <button
      className={`${cl} ${s.button} ${makeClass(modifyClass)}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;