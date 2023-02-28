import { IProduct } from "./IProduct";

export enum ProductsActionTypes{
  GET_PRODUCTS = 'GET_PRODUCTS'
}

export interface IProductsState{
  products:IProduct[];
}

interface IGetProductsAction {
  type: ProductsActionTypes.GET_PRODUCTS;
  payload: IProduct[];
}

export type ProductsAction = IGetProductsAction; // action1 | action2
