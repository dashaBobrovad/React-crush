import React from "react";
import { shallowEqual } from "react-redux";
import { ProductCardBasket } from "../../components";
import useTypedSelector from "../../data/hooks/useTypedSelector";
import { IProduct } from "../../types/IProduct";
import s from "./BasketPage.module.scss";

function BasketPage() {
  // shallowEquals имеет смысл, когда вы выбираете объект, который может быть похож по содержимому, но отличается по ссылке (object)
  const basket = useTypedSelector(
    (state) => state.products.basket,
    shallowEqual
  );

  return (
    <div className="column">
      <div className={`flex flex-row ${s.header}`}>
        <h1>Basket</h1>
      </div>
      {basket.list.length > 0 ? (
        <>
          <div className={s.count}>
            {basket.totalCount}&nbsp;товаров на сумму {basket.totalPrice} $
          </div>

          <div>
            {basket.list.map((product: IProduct, index: number) => (
              <ProductCardBasket
                product={basket.list[index]}
                key={product.id}
              />
            ))}
          </div>
        </>
      ) : (
        <div>basket is empty</div>
      )}
      {/* {basket.list.length > 0 ? (
        <>
          <ul>
            {basket.totalPrice && <li>total price: {basket.totalPrice}</li>}
            {basket.totalCount && <li>total count: {basket.totalCount}</li>}
          </ul>
          <div>
            {basket.list.map((product: IProduct, index: number) => (
              <ProductCardBasket
                product={basket.list[index]}
                key={product.id}
              />
            ))}
          </div>
        </>
      ) : (
        <div>basket is empty</div>
      )} */}
    </div>
  );
}

export default BasketPage;
