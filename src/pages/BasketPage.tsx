import React from "react";
import {shallowEqual,} from "react-redux";
import { ProductCard } from "../components";
import useTypedSelector from "../data/hooks/useTypedSelector";
import { IProduct, ProductType } from "../types/IProduct";

function BasketPage() {
  // shallowEquals имеет смысл, когда вы выбираете объект, который может быть похож по содержимому, но отличается по ссылке
  const basket = useTypedSelector((state) => state.products.basket, shallowEqual);

  // React.useEffect(() => {
  //   console.log("fx");
  //   console.log(basket.totalCount);
  // }, [basket]
  // );

  return (
      <div className="column">
        <h1>BasketPage</h1>
      <ul>
        <li>total price: {basket.totalPrice}</li>
        <li>total count: {basket.totalCount}</li>
      </ul>
      <div>
        {basket.list.map((product: IProduct, index: number) => (
          <ProductCard product={basket.list[index]} key={product.id} type={ProductType.BASKET}/>
        ))}
      </div>
      </div>
  
  );
}

export default BasketPage;
