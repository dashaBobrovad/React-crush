import { Link } from "react-router-dom";
import { shallowEqual } from "react-redux";
import s from "./Header.module.scss";
import Navigation from "../Navigation/Navigation";
import Counter, { CounterSizeTypes } from "../Counter/Counter";
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
              totalCount !== 0 && <Counter count={totalCount} size={CounterSizeTypes.SM}/>
            }
            <Icon icon="basket" color="white"/>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
