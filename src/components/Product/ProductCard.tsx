import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { IProduct, IProductBasket, ProductType } from "../../types/IProduct";
import { Button, Icon, Picture } from "..";
import s from "../../assets/scss/components/Product/Product.module.scss";
import useTypedDispatch from "../../data/hooks/useTypedDispatch";
import { addProductsToBasketAction, removeProductsFromBasketAction } from "../../data/reducers/productsReducer";


interface IProductCardProps {
  // change everywhere to IProduct
  product: IProductBasket;
  type?: ProductType.DEFAULT | ProductType.BASKET | null;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
function ProductCard({ product, type }: IProductCardProps) {
  const dispatch = useTypedDispatch();

  const addProductToBasket = (e:Event, productItem: IProduct) => {
    e.preventDefault();
    dispatch(addProductsToBasketAction(productItem));
  };

  const removeProductFromBasket = (e:Event, productItem: IProduct) => {
    e.preventDefault();
    dispatch(removeProductsFromBasketAction(productItem));
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
        </div>

        <Button
              className={`button--gradient ${s.button}`}
              onClick={(e:Event) => addProductToBasket(e, product)}
              >+</Button> 

        { 
          type === ProductType.BASKET &&  <Button
          className={`button--gradient ${s.button}`}
          onClick={(e:Event) => removeProductFromBasket(e, product)}
          >-</Button>
        }
        
      </div>
    </NavLink>
  );
}

ProductCard.defaultProps = {
  type: ProductType.DEFAULT,
};


export default ProductCard;
