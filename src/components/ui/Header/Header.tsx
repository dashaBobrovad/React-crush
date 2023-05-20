import { Link } from "react-router-dom";
import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import {BasketCounter} from "../..";
import { BasketCounterSizeTypes } from "../BasketCounter/BasketCounter";

import Icon from "../Icon/Icon";

function Header() {
  return (
    <div className={s.header}>
      <div className={`${s.content} column`}>
        <Navigation />
        <Link to="/basket">
          {" "}
          <div className={s.basket}>
            {/* {
              totalCount !== 0 && <BasketCounter count={totalCount} size={BasketCounterSizeTypes.SM}/>
            } */}
            <BasketCounter size={BasketCounterSizeTypes.SM}/>
            <Icon icon="basket" color="white"/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
