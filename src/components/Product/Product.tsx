import React, { useState } from "react";
import { IProduct } from "../../types/IProduct";
import { Button, Icon } from '../../components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import s from '../../assets/scss/components/Product/Product.module.scss';



interface ProductProps {
  product: IProduct;
}

const Product = ({ product }: ProductProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    // <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
    <div className={s.product}>
      <img src={product.image} className={s.product__image} alt={product.title} />
      <h2 className={s.product__title}>{product.title}</h2>
      <p className={s.product__price}>{(product.price).toFixed(2)} $</p>
      <p className={s.product__category}>{product.category}</p>

      <div className={s.product__info}>
        <p className={s.product__rate}>{(product.rating.rate).toFixed(1)}  <Icon icon={faStar}/></p>
        <p className={s.product__count}>
          <span>{product.rating.count}</span>{' '}
          <span className={s.product__count}>pieces</span>
        </p>
      </div>

      <Button
        // className={s.product__button}
        className={`${open ? 'button--active' : 'button--unactive'} button--shadow`}
        onClick={handleOpen}>{open ? 'hide' : 'show'}details
      </Button>

      {open && <p className="italic pt-3">{product.description}</p>}
    </div>
  );
};

export default Product;
