import { IProduct } from "./IProduct";

export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_PRODUCTS_TO_BASKET = "ADD_PRODUCTS_TO_BASKET",
  DECREASE_PRODUCT_QTY_FROM_BASKET = "DECREASE_PRODUCT_QTY_FROM_BASKET",
  REMOVE_PRODUCT_FROM_BASKET = "REMOVE_PRODUCT_FROM_BASKET",
}

export interface IProductsState {
  products: IProduct[];
  basket: {
    list: IProduct[],
    totalPrice: number,
    totalCount: number
  };
}

interface IGetProductsAction {
  type: ProductsActionTypes.GET_PRODUCTS;
  payload: IProduct[];
}

interface IAddProductsToBasket {
  type: ProductsActionTypes.ADD_PRODUCTS_TO_BASKET;
  payload: IProduct;
}

interface IDecreaseProductQtyFromBasket {
  type: ProductsActionTypes.DECREASE_PRODUCT_QTY_FROM_BASKET;
  payload: IProduct;
}

interface IRemoveProductFromBasket {
  type: ProductsActionTypes.REMOVE_PRODUCT_FROM_BASKET;
  payload: IProduct;
}

export type ProductsAction = IGetProductsAction | IAddProductsToBasket | IDecreaseProductQtyFromBasket | IRemoveProductFromBasket; // action1 | action2
