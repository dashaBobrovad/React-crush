import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { shallowEqual } from "react-redux";
import s from "../../assets/scss/components/ui/Header.module.scss";
import Icon from "./Icon";
import Navigation from "./Navigation";
import Counter, { CounterSizeTypes } from "./Counter";
import useTypedSelector from "../../data/hooks/useTypedSelector";

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
            <Icon icon={faBasketShopping} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
