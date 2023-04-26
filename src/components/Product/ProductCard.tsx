import React from "react";
import { IProduct } from "../../types/IProduct";
import { Button, Icon, Picture } from '..';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import s from '../../assets/scss/components/Product/Product.module.scss';
import { useTypedDispatch } from "../../data/hooks/useTypedDispatch";
import { addProductsToBasketAction } from "../../data/reducers/productsReducer";
import { NavLink } from "react-router-dom";

interface IProductCardProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
const ProductCard = ({ product }: IProductCardProps) => {

  const dispatch = useTypedDispatch();

  const addProductToBasket = (product: IProduct) => {
    dispatch(addProductsToBasketAction(product));
  };


  return (
    <NavLink to={`product/${product.id}`}>
      <div className={s.product}>
        <Picture
          src={product.image}
          parentClass={s.product__image}
        />
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
        <Button className="button--gradient" onClick={() => addProductToBasket(product)}>go to product</Button>
      </div>
    </NavLink>
  );
};

export default ProductCard;
