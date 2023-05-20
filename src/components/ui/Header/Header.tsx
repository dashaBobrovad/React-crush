import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import {BasketCounter} from "../..";

import Icon from "../Icon/Icon";

function Header() {
  return (
    <div className={s.header}>
      <div className={`${s.content} column`}>
        <Navigation />
        <Link to="/basket">
          <div className={s.basket}>
            <BasketCounter/>
            <Icon icon="basket" color="white"/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
