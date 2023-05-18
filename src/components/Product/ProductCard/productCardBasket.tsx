import React from "react";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../types/IProduct";
import s from "./Product.module.scss";
import useTypedDispatch from "../../../data/hooks/useTypedDispatch";
import {
  addProductsToBasketAction,
  decreaseProductQtyFromBasketAction,
  removeProductFromBasketAction,
} from "../../../data/reducers/productsReducer";
import Picture from "../../ui/Picture/Picture";

interface IProductCardProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
function ProductCardBasket({ product }: IProductCardProps) {
  const dispatch = useTypedDispatch();

  const [isRemoveDisabled, setIsRemoveDisabled] = React.useState(true);

  const addProductToBasket = (
    e: React.MouseEvent<Element, MouseEvent>,
    productItem: IProduct
  ) => {
    // TODO: link?
    e.preventDefault();
    dispatch(addProductsToBasketAction(productItem));
  };

  const decreaseProductQtyFromBasket = (
    e: React.MouseEvent<Element, MouseEvent>,
    productItem: IProduct
  ) => {
    // TODO: link?
    e.preventDefault();
    if (product.qty === 1 || product.qty === undefined) {
      return;
    }

    dispatch(decreaseProductQtyFromBasketAction(productItem));
  };

  React.useEffect(() => {
    if (product.qty === 1 || product.qty === undefined) {
      setIsRemoveDisabled(true);
    } else {
      setIsRemoveDisabled(false);
    }
  }, [product.qty]);

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
        <Picture src={product.image} parentClass={s.image} />
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

            <div className={s.counter}>
              <button
                type="button"
                className={`${s.remove} ${isRemoveDisabled ? "disabled" : ""}`}
                onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                  decreaseProductQtyFromBasket(e, product)
                }
              >
                -
              </button>
              <span>{product.qty || 1}</span>
              <button
                type="button"
                className={s.remove}
                onClick={(e: React.MouseEvent<Element, MouseEvent>) =>
                  addProductToBasket(e, product)
                }
              >
                +
              </button>
            </div>
          </div>
        </div>
    </NavLink>
  );
}

export default ProductCardBasket;
