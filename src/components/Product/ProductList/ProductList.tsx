import React from "react";
import { ProductCard } from "../..";
import s from "./ProductList.module.scss";
import { IProduct } from "../../../types/IProduct";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";

interface ProductProps {
products: {list:IProduct[], isLoaded:boolean}
}

function ProductList({ products }: ProductProps) {
 
  const plugArray = Array(10).fill(true);


  return (
    <div className={s.productList}>
 

      {
        products.isLoaded ? (  
          products.list.map((product, index) => (
            <ProductCard product={products.list[index]} key={product.id} />
          ))) : (
            // TODO: add сервис для создания айдишников
            // eslint-disable-next-line react/no-array-index-key
            plugArray.map((item, index) => <ProductCardSkeleton key={index}/>)
          )
      }
    
    </div>
  );
}

export default React.memo(ProductList);
