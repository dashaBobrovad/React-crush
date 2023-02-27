import React from "react";
import { Error, Product } from "../../components";
import { useProducts } from "../../data/hooks/products";
import s from '../../assets/scss/components/Product/ProductList.module.scss';
import { IProduct } from "../../types/IProduct";

interface ProductProps {
  products: IProduct[];
}

const ProductList = ({ products }: ProductProps) => {
  const { loading, error } = useProducts();
  return (
    <div className={s.productList}>
      {products.length >= 1 &&
        products.map((product, index) => (
          <Product product={products[index]} key={product.id} />
        ))}
      
      {error && <Error error={error} />}
      {products.length === 0 && !loading && !error && <div>no data </div>}
    </div>
  );
};

export default React.memo(ProductList);