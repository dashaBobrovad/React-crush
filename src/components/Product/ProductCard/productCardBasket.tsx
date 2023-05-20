import React from "react";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../types/IProduct";
import s from "./Product.module.scss";
import useTypedDispatch from "../../../data/hooks/useTypedDispatch";
import { removeProductFromBasketAction } from "../../../data/reducers/productsReducer";
import Picture from "../../ui/Picture/Picture";
import {ItemCounter} from "../..";

interface IProductCardProps {
  product: IProduct;
}

function ProductCardBasket({ product }: IProductCardProps) {
  const dispatch = useTypedDispatch();

  const removeProductFromBasket = (
    e: React.MouseEvent<Element, MouseEvent>,
    productItem: IProduct
  ) => {
    // TODO: link?
    e.preventDefault();
    dispatch(removeProductFromBasketAction(productItem));
  };

  return (
    <NavLink to={`/product/${product.id}`} className={`${s.product} ${s.product_basket} flex flex-row`}>
        <Picture src={product.image} parentClass={s.image} alt={product.title}/>
        <div className={s.characteristics}>
          <h2 className={`${s.title} ellipsis-2`}>{product.title}</h2>
          <p className={s.shop}>Super Duper Shop</p>
          <button
            type="button"
            className={s.remove}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
              removeProductFromBasket(e, product)
            }
          >
            X Remove
          </button>
          <div className={`flex flex-row ${s.footer}`}>
            <p className={s.sum}>
              you will pay <span>{product.sum || 1} $</span>
            </p>
            <ItemCounter productItem={product}/>
          </div>
        </div>
    </NavLink>
  );
}

export default React.memo(ProductCardBasket);
