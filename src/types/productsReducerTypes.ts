import { IProduct } from "./IProduct";

export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_PRODUCTS_TO_BASKET = "ADD_PRODUCTS_TO_BASKET",
}

export interface IProductsState {
  products: IProduct[];
  basket: IProduct[];
}

interface IGetProductsAction {
  type: ProductsActionTypes.GET_PRODUCTS;
  payload: IProduct[];
}

interface IAddProductsToBasket {
  type: ProductsActionTypes.ADD_PRODUCTS_TO_BASKET;
  payload: IProduct | any; // ???
}

export type ProductsAction = IGetProductsAction | IAddProductsToBasket; // action1 | action2
