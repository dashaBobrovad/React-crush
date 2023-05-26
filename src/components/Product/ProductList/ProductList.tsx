import React, {memo} from "react";
import { ProductCard } from "../..";
import s from "./ProductList.module.scss";
import { IProduct } from "../../../types/IProduct";
import ProductCardSkeleton from "../ProductCardSkeleton/ProductCardSkeleton";

interface ProductProps {
products: {list:IProduct[], isLoaded:boolean}
}

function ProductList({ products }: ProductProps) {
 
  const plugArray = Array(6).fill(null);


  return (
    <div className={s.productList}>

      {
        products.isLoaded ? (  
          products.list.map((product, index) => (
            <ProductCard product={products.list[index]} key={product.id} />
          ))) : (
            plugArray.map(() => <ProductCardSkeleton />)
          )
      }

    </div>
  );
}

export default memo(ProductList);
