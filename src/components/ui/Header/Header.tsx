import { Link } from "react-router-dom";
import { shallowEqual } from "react-redux";
import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import {BasketCounter} from "../..";
import { BasketCounterSizeTypes } from "../BasketCounter/BasketCounter";
import useTypedSelector from "../../../data/hooks/useTypedSelector";
import Icon from "../Icon/Icon";

function Header() {
  // shallowEquals имеет смысл, когда вы выбираете объект, который может быть похож по содержимому, но отличается по ссылке (object)
  const totalCount = useTypedSelector((state) => state.products.basket.totalCount, shallowEqual);

  return (
    <div className={s.header}>
      <div className={`${s.content} column`}>
        <Navigation />
        <Link to="/basket">
          {" "}
          <div className={s.basket}>
            {
              totalCount !== 0 && <BasketCounter count={totalCount} size={BasketCounterSizeTypes.SM}/>
            }
            <Icon icon="basket" color="white"/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
