import React, { useState } from 'react';
import { ErrorBoundary, ProductList } from "../components";
import { IProduct } from "../types/IProduct";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../data/asyncActions/products";

function ProductsPage() {

  const dispatch = useDispatch();
  const reduxProducts = useSelector((state: any) => state.products.products);

  React.useEffect(() => {
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