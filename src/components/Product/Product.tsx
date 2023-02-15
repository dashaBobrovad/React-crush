import React, { useState } from "react";
import { IProduct } from "../../types/IProduct";
import { Button } from '..';
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
      <p className={s.product__title}>{product.title}</p>
      <p className={s.product__price}>{product.price}</p>
      {/* <p className={s.product__rate}>{product.rating.rate}</p>
      <p className={s.product__count}>{product.rating.count}</p> */}

      <Button 
        className={s.product} 
        modifyClass={open ? 'active' : 'unactive'}
        onClick={handleOpen}>{open ? 'hide' : 'show'}details
      </Button>

      {open && <p className="italic pt-3">{product.description}</p>}
    </div>
  );
};

export default Product;
