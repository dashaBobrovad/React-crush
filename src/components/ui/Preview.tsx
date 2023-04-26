import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import s from '../../assets/scss/components/ui/Preview.module.scss';
import Icon from "./Icon";

function Preview() {
  return (
    // предзагрузка
    <div className={s.preview}>
      <div className="column">
        <div className={s.preview__content}>
          <h1 className={s.preview__title}>
            Магазин модной одежды, обуви и аксессуаров ведущих европейских брендов для женщин, мужчин и детей.
            В ассортименте марки представлены: одежда, обувь, сумки и аксессуары.
          </h1>


          <div className={s.preview__link}>
            <Link to="/basket">
              <span>Перейти в корзину</span>
              <Icon icon={faArrowRight} className={s.preview__linkArrow} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Preview;
