import React from "react";
import s from "./ProductCardSkeleton.module.scss";

function ProductCardSkeleton() {

  return (
    <div className={s.product}>
      <div className={`${s.item} ${s.avatar}`} />
      <div className={`${s.item} ${s.title}`} />
      <div className={`${s.item} ${s.price}`} />
      <div className={`${s.item} ${s.category}`} />
      <div className={`${s.item} ${s.pieces}`} />
      <div className={`${s.item} ${s.btn}`} />
    </div>
  );
}

export default ProductCardSkeleton;
