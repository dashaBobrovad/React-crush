import React from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual } from "react-redux";
import { IProduct } from "../../../types/IProduct";
import { Button, ItemCounter, /* Icon, */ Picture } from "../../index";
import s from "./Product.module.scss";
import useTypedDispatch from "../../../data/hooks/useTypedDispatch";
import { addProductsToBasketAction } from "../../../data/reducers/productsReducer";
import useTypedSelector from "../../../data/hooks/useTypedSelector";

interface IProductCardProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
function ProductCard({ product }: IProductCardProps) {
  // const rating  = product.rating.rate.toFixed(1); 

  const productInBasket = useTypedSelector((state) => state.products.basket.list.find(item => item.id === product.id), shallowEqual);

  

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
        <Picture src={product.image} parentClass={s.image} alt={product.title}/>
        <h2 className={`${s.title} ellipsis-2`}>{product.title}</h2>
        <p className={s.price}>{price} $</p>
        <p className={s.category}>{product.category}</p>

        <div className={s.note}>no more than  {product.rating.count} pieces</div>

        {
          productInBasket ? (<ItemCounter productItem={productInBasket} ratingCount={productInBasket.rating.count}/>) : (<Button
            className={`button_gradient ${s.button}`}
            onClick={(e: Event) => addProductToBasket(e, product)}
          >
            +
          </Button>)
        }


      </div>
    </NavLink>
  );
}

export default React.memo(ProductCard);
