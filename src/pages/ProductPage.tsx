import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product, ProductSeparated } from '../components';
import { useTypedSelector } from '../data/hooks/useTypedSelector';
// import {IProduct} from '../types/IProduct';

function ProductPage() {
  let { id } = useParams();

  const products = useTypedSelector(state => state.products.products);

  const productEl = products && products.find(el => el.id === Number(id));

  return (
    <div className='column'>
      {
        // отдельная карточка без кнопки перейти к товару
        productEl && <ProductSeparated product={productEl} key={productEl?.id} />
      }
      {
        !productEl && <div>Товар не найден</div>
      }
    </div>
  );
}

export default ProductPage;