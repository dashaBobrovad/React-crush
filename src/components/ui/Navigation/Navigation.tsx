import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? `${s.item} ${s.active}`
            : s.item
        }
      >
        Main
      </NavLink>
    </nav>
  );
}

export default Navigation;
