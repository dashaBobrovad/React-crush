import { Product } from "../../components";
import { useProducts } from "../../hooks/products";
import s from '../../assets/scss/ProductList.module.scss';

const ProductList = () => {
  const { loading, error, products } = useProducts();

  return (
    <div className={s.productList}>
      {products.length >= 1 &&
        products.map((product, index) => (
          <Product product={products[index]} key={product.id} />
        ))}

      {products.length === 0 && !loading && !error && <div>no data </div>}
    </div>
  );
};

export default ProductList;