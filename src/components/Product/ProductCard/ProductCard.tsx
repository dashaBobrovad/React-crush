import React from "react";
import { NavLink } from "react-router-dom";
import { IProduct } from "../../../types/IProduct";
import { Button, /* Icon, */ Picture } from "../../index";
import s from "./Product.module.scss";
import useTypedDispatch from "../../../data/hooks/useTypedDispatch";
import { addProductsToBasketAction } from "../../../data/reducers/productsReducer";

interface IProductCardProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
function ProductCard({ product }: IProductCardProps) {
  // const rating  = product.rating.rate.toFixed(1); 

  const dispatch = useTypedDispatch();

  const price = product.price.toFixed(2);

  const addProductToBasket = (e: Event, productItem: IProduct) => {
    // TODO: link?
    e.preventDefault();
    dispatch(addProductsToBasketAction(productItem));
  };

  return (
    <NavLink to={`/product/${product.id}`}>
      <div className={`${s.product} flex flex-column`}>
        <Picture src={product.image} parentClass={s.image} />
        <h2 className={`${s.title} ellipsis-2`}>{product.title}</h2>
        <p className={s.price}>{price} $</p>
        <p className={s.category}>{product.category}</p>
        {/* <div className={s.info}>
          <p>
            {rating} <Icon icon="star" color="white"/>
            info
          </p>
        </div> */}

        <div className={s.note}>no more than  {product.rating.count} pieces</div>

<Button
    className={`button_gradient ${s.button}`}
    onClick={(e: Event) => addProductToBasket(e, product)}
  >
    +
  </Button>
      
      </div>
    </NavLink>
  );
}

export default ProductCard;
