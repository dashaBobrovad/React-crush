import React from "react";
import s from "./ProductCardSkeleton.module.scss";

function ProductCardSkeleton() {

  return (
    <div className={s.product}>
      <div className={s.avatar} />
      <div className={s.line} />
      <div className={s.line} />
    </div>
  );
}

export default ProductCardSkeleton;
