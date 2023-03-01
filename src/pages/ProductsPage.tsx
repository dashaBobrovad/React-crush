import React, {useEffect} from 'react';
import { ErrorBoundary, ProductList } from "../components";
import { useDispatch } from "react-redux";
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
    <ErrorBoundary>
      <div className=''>
        <div className='column'>

          <ProductList products={reduxProducts} />

        </div>
      </div>
    </ErrorBoundary>
  );
}

export default ProductsPage;