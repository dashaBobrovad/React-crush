import React from "react";
import { NavLink } from "react-router-dom";
import s from "../../assets/scss/components/ui/Navigation.module.scss";

function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink to="/" className={({ isActive }) => (isActive ? `${s.navigation__item} ${s['navigation__item--active']}` : s.navigation__item)}>Main</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? `${s.navigation__item} ${s['navigation__item--active']}` : s.navigation__item)}>About</NavLink>
    </nav>
  );
}

export default Navigation;
