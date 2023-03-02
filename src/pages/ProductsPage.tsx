import React, { useEffect } from 'react';
import { ErrorBoundary, Preview, ProductList } from "../components";
import { fetchProducts } from "../data/asyncActions/products";
import { useTypedDispatch } from '../data/hooks/useTypedDispatch';
import { useTypedSelector } from '../data/hooks/useTypedSelector';

function ProductsPage() {

  const dispatch = useTypedDispatch();
  const reduxProducts = useTypedSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <React.Fragment>
      <Preview />
      <div className='column'>
        <ProductList products={reduxProducts} />
      </div>
    </React.Fragment>
  );
}

export default ProductsPage;