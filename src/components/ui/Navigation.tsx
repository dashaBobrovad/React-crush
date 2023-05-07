import { NavLink } from "react-router-dom";
import s from "../../assets/scss/components/ui/Navigation.module.scss";

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
      <NavLink
        to="/test"
        className={({ isActive }) =>
          isActive
            ? `${s.item} ${s.active}`
            : s.item
        }
      >
        Test Page (polygon)
      </NavLink>
    </nav>
  );
}

export default Navigation;
