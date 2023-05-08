import { IProduct, IProductBasket } from "./IProduct";

export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_PRODUCTS_TO_BASKET = "ADD_PRODUCTS_TO_BASKET",
}

export interface IProductsState {
  products: IProduct[];
  basket: any;
}

interface IGetProductsAction {
  type: ProductsActionTypes.GET_PRODUCTS;
  payload: IProduct[];
}

interface IAddProductsToBasket {
  type: ProductsActionTypes.ADD_PRODUCTS_TO_BASKET;
  // TODO: пофиксить, как в platform тестовом 
  payload: IProduct | IProductBasket | any;
}

export type ProductsAction = IGetProductsAction | IAddProductsToBasket; // action1 | action2
