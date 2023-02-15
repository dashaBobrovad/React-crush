import React, { ReactNode } from 'react';
import s from '../../assets/scss/components/ui/Button.module.scss';

interface ButtonProps {
  onClick?: () => void,
  children?: ReactNode,
  cl?: string,
  modifyClass?: string[];
}


function Button({ onClick, children, cl, modifyClass }: ButtonProps) {
  // вынести в хелперы (+ спросить, норм ли это тема вообще)
  function makeClass(cl: string = '', modifyClass: string[] =  []) {
    let result = [];
    cl && result.push(cl);
    modifyClass && modifyClass?.map((cl: string) => result.push(s[`button--${cl}`]));
    return result.join(' ');
  }

  return (
    <button
      className={`${cl} ${s.button} ${makeClass(cl, modifyClass)}`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;