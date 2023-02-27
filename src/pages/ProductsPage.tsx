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
      <div className='block'>

        <ProductList products={reduxProducts} />

      </div>
    </ErrorBoundary>
  );
}

export default ProductsPage;