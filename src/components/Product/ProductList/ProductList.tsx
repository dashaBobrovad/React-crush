import React from "react";
import { ProductCard } from "../..";
import s from "./ProductList.module.scss";
import { IProduct } from "../../../types/IProduct";

interface ProductProps {
  products: IProduct[];
}

function ProductList({ products }: ProductProps) {
  return (
    <div className={s.productList}>
      {
        // products.length >= 1 &&
        products.map((product, index) => (
          <ProductCard product={products[index]} key={product.id} />
        ))
      }

      {/* {error && <Error error={error} />}
      {products.length === 0 && !loading && !error && <div>no data </div>} */}
    </div>
  );
}

export default React.memo(ProductList);
