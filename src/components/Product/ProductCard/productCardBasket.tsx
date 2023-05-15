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

  const addProductToBasket = (e: React.MouseEvent<Element, MouseEvent>, productItem: IProduct) => {
    e.preventDefault();
    dispatch(addProductsToBasketAction(productItem));
  };

  const decreaseProductQtyFromBasket = (e: React.MouseEvent<Element, MouseEvent>, productItem: IProduct) => {
    e.preventDefault();
    dispatch(decreaseProductQtyFromBasketAction(productItem));
  };

  const removeProductFromBasket = (e: React.MouseEvent<Element, MouseEvent>, productItem: IProduct) => {
    e.preventDefault();
    dispatch(removeProductFromBasketAction(productItem));
  };

  return (
    <NavLink to={`/product/${product.id}`}>
      <div className={`${s.product} ${s["product--basket"]} flex flex-row`}>
        <Picture src={product.image} parentClass={s.image} />
        <div className={s.characteristics}>
          <h2 className={`${s.title} ellipsis-2`}>{product.title}</h2>
          <p className={s.shop}>Super Duper Shop</p>

          <button type="button" className={s.remove}
            onClick={(e: React.MouseEvent<Element, MouseEvent>) => removeProductFromBasket(e, product)}>
              X Remove
          </button>
          

          <div className={s.counter}>
          <button type="button" className={s.remove}
           onClick={(e: React.MouseEvent<Element, MouseEvent>) => addProductToBasket(e, product)}>
              +
          </button>
          <span>{product.qty || 1}</span>
          <button type="button" className={s.remove}
           onClick={(e: React.MouseEvent<Element, MouseEvent>) => decreaseProductQtyFromBasket(e, product)}>
              -
          </button>
          </div>



          {false && (
            <>
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
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => addProductToBasket(e, product)}
              >
                +
              </Button>

              <Button
                className={`button--gradient ${s.button}`}
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => decreaseProductQtyFromBasket(e, product)}
              >
                -
              </Button>
              <Button
                className={`button--gradient ${s.button}`}
                onClick={(e: React.MouseEvent<Element, MouseEvent>) => removeProductFromBasket(e, product)}
              >
                X
              </Button>
            </>
          )
          }


        </div>
      </div>
    </NavLink>
  );
}

export default ProductCardBasket;
