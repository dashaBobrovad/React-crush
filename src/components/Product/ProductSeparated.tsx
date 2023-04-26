import React from "react";
import { IProduct } from "../../types/IProduct";
import { Icon, Picture } from '..';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import s from '../../assets/scss/components/Product/Product.module.scss';

interface IProductSeparatedProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
const ProductSeparated = ({ product }: IProductSeparatedProps) => {
  return (
    <div className={`${s.product} ${s['product--separated']}`}>
      <Picture
        src={product.image}
        parentClass={s.product__image}
      />
      <div className={s.product__content}>
        <h2 className={`${s.product__title} ellipsis-2`}>{product.title}</h2>
        <p className={s.product__price}>{(product.price).toFixed(2)} $</p>
        <p className={s.product__category}>{product.category}</p>
        <div className={s.product__info}>
          <p className={s.product__rate}>{(product.rating.rate).toFixed(1)}  <Icon icon={faStar} /></p>
          <p className={s.product__count}>
            <span>{product.rating.count}</span>{' '}
            <span className={s.product__count}>pieces</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSeparated;
