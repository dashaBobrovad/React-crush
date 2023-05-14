import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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

          <div className={s.link}>
            <Link to="/basket">
              <span>Перейти в корзину</span>
              <Icon icon={faArrowRight} className={s.linkArrow} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
