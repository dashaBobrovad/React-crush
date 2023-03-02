import React from 'react';
import { Product } from '../components';
import { useTypedSelector } from '../data/hooks/useTypedSelector';

function BasketPage() {
  const basketList = useTypedSelector(state => state.products.basket);
  return (
    <React.Fragment>
      <div className='column'>BasketPage</div>
      <div>
        {
          basketList.map((product, index) => (
            <Product product={basketList[index]} key={product.id} />
          ))}
      </div>
    </React.Fragment>
  );
}

export default BasketPage;