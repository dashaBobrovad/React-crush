import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import s from "../../assets/scss/components/ui/Header.module.scss";
import Icon from "./Icon";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={s.header}>
      <div className={`${s.content} column`}>
        <Navigation />
        <Link to="/basket">
          {" "}
          <div className={s.basket}>
            <Icon icon={faBasketShopping} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
