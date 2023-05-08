import { IProduct, IProductBasket } from "./IProduct";

export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_PRODUCTS_TO_BASKET = "ADD_PRODUCTS_TO_BASKET",
}

export interface IProductsState {
  products: IProduct[];
  basket: IProductBasket[];
}

interface IGetProductsAction {
  type: ProductsActionTypes.GET_PRODUCTS;
  payload: IProduct[];
}

interface IAddProductsToBasket {
  type: ProductsActionTypes.ADD_PRODUCTS_TO_BASKET;
  payload: IProductBasket;
}

export type ProductsAction = IGetProductsAction | IAddProductsToBasket; // action1 | action2
