import React, { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct;
}

const Product = ({product}: ProductProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} className="w-1/6" alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold mb-10">{product.price}</p>
      <p>{product.rating.rate}</p>
      <p>{product.rating.count}</p>
      <button className={`border-${open ? 'red-800' : 'gray-100'} border-4 p-3`} onClick={handleOpen}>
        {open ? 'hide' : 'show'} details
      </button>
      {open && <p className="italic pt-3">{product.description}</p>}
    </div>
  );
};

export default Product;
