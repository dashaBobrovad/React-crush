import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import s from "../../assets/scss/components/ui/Header.module.scss";
import Icon from "./Icon";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={s.header}>
      <div className={`${s.header__content} column`}>
        <Navigation />
        <div className={s.header__basket}><Icon icon={faBasketShopping} /></div>
        </div>
    </div>
  );
}

export default Header;
