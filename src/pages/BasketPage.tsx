import React from "react";
// import { Product } from "../components";
// import useTypedSelector from "../data/hooks/useTypedSelector";
// import { IProduct } from "../types/IProduct";

function BasketPage() {
  // const basketList = useTypedSelector((state) => state.products.basket);
  return (
    <>
      <div className="column">BasketPage</div>
      <div>
        {/* {basketList.map((product: IProduct, index: number) => (
          <Product product={basketList[index]} key={product.id} />
        ))} */}
      </div>
    </>
  );
}

export default BasketPage;
