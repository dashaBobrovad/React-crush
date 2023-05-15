import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../types/IProduct";
import { Button, Icon, Picture } from "../../index";
import s from "./Product.module.scss";
import useTypedDispatch from "../../../data/hooks/useTypedDispatch";
import {
  addProductsToBasketAction,
  decreaseProductQtyFromBasketAction,
  removeProductFromBasketAction,
} from "../../../data/reducers/productsReducer";

interface IProductCardProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
function ProductCardBasket({ product }: IProductCardProps) {
  const dispatch = useTypedDispatch();

  const addProductToBasket = (e: Event, productItem: IProduct) => {
    e.preventDefault();
    dispatch(addProductsToBasketAction(productItem));
  };

  const decreaseProductQtyFromBasket = (e: Event, productItem: IProduct) => {
    e.preventDefault();
    dispatch(decreaseProductQtyFromBasketAction(productItem));
  };

  const removeProductFromBasket = (e: Event, productItem: IProduct) => {
    e.preventDefault();
    dispatch(removeProductFromBasketAction(productItem));
  };

  return (
    <NavLink to={`/product/${product.id}`}>
      <div className={s.product}>
        <Picture src={product.image} parentClass={s.image} />
        <h2 className={`${s.title} ellipsis-2`}>{product.title}</h2>
        <p className={s.price}>{product.price.toFixed(2)} $</p>
        <p className={s.category}>{product.category}</p>
        <div className={s.info}>
          <p>
            {product.rating.rate.toFixed(1)} <Icon icon={faStar} />
          </p>

          <p className={s.count}>
            <span>{product.qty || 1} pieces</span>
          </p>
          <p className={s.count}>
            <span>you will pay {product.sum || 1} $</span>
          </p>
        </div>

        <Button
          className={`button--gradient ${s.button}`}
          onClick={(e: Event) => addProductToBasket(e, product)}
        >
          +
        </Button>

        <Button
          className={`button--gradient ${s.button}`}
          onClick={(e: Event) => decreaseProductQtyFromBasket(e, product)}
        >
          -
        </Button>
        <Button
          className={`button--gradient ${s.button}`}
          onClick={(e: Event) => removeProductFromBasket(e, product)}
        >
          X
        </Button>
      </div>
    </NavLink>
  );
}

export default ProductCardBasket;
