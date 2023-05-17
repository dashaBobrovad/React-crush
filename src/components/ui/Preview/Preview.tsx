import { Link } from "react-router-dom";
import s from "./Preview.module.scss";
import Icon from "../Icon/Icon";

function Preview() {
  return (
    // предзагрузка
    <div className={s.preview}>
      <div className="column">
        <div className={s.content}>
          <h1 className={s.title}>
            Магазин модной одежды, обуви и аксессуаров ведущих европейских
            брендов для женщин, мужчин и детей. В ассортименте марки
            представлены: одежда, обувь, сумки и аксессуары.
          </h1>

          <Link to="/basket" className={s.link}>
            <span>Перейти в корзину</span>
            <Icon icon="rightArrow" color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Preview;
