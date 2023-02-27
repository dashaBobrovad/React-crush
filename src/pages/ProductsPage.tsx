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
    console.log(reduxProducts);
  }, []);
  // сейчас берем продукты из редакса - -не запрашиваем данные каждый раз; допистаь логику, чтобы лоадинги правильно работали - поместить в хук

  return (
    <ErrorBoundary>
      <div className='block'>

        <ProductList products={reduxProducts} />

      </div>
    </ErrorBoundary>
  );
}

export default ProductsPage;