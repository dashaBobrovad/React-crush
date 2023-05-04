import React from "react";
import { Product } from "..";
import s from "../../assets/scss/components/Product/ProductList.module.scss";
import { IProduct } from "../../types/IProduct";

interface ProductProps {
  products: IProduct[];
}

function ProductList({ products }: ProductProps) {
  return (
    <div className={s.productList}>
      {
        // products.length >= 1 &&
        products.map((product, index) => (
          <Product product={products[index]} key={product.id} />
        ))
      }

      {/* {error && <Error error={error} />}
      {products.length === 0 && !loading && !error && <div>no data </div>} */}
    </div>
  );
}

export default React.memo(ProductList);
