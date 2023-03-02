import React from "react";
import { IProduct } from "../../types/IProduct";
import { Button, Icon, Picture } from '../../components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import s from '../../assets/scss/components/Product/Product.module.scss';
import { useTypedDispatch } from "../../data/hooks/useTypedDispatch";
import { addProductsToBasketAction } from "../../data/reducers/productsReducer";

interface ProductProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
const Product = ({ product }: ProductProps) => {

  const dispatch = useTypedDispatch();

  const addProductToBasket = (product: IProduct) => {
    console.log('addProductToBasket');
    dispatch(addProductsToBasketAction(product));
    // dispatch(addProductsToBasketAction({
    //   "id": 1,
    //   "title": "addProductToBasket",
    //   "price": 109.95,
    //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //   "category": "men's clothing",
    //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //   "rating": {
    //     "rate": 3.9,
    //     "count": 120
    //   }
    // }));
  };


  return (
    // <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
    <div className={s.product}>
      {/* <img src={product.image} className={s.product__image} alt={product.title} /> */}

      <Picture
        src={product.image}
        //  width={100}
        //  height={100}
        parentClass={s.product__image}
      //  thumb={data.thumbnail}
      //  width={data.width}
      //  height={data.height}
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

      <Button className="button--gradient" onClick={()=>addProductToBasket(product)}>go to product</Button>


    </div>
  );
};

export default Product;
