import { IProduct, IProductBasket } from "./IProduct";

export enum ProductsActionTypes {
  GET_PRODUCTS = "GET_PRODUCTS",
  ADD_PRODUCTS_TO_BASKET = "ADD_PRODUCTS_TO_BASKET",
  REMOVE_PRODUCTS_FROM_BASKET = "REMOVE_PRODUCTS_FROM_BASKET",
}

export interface IProductsState {
  products: IProduct[];
  basket: {
    list: IProductBasket[],
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
  payload: IProductBasket;
}

interface IRemoveProductsFromBasket {
  type: ProductsActionTypes.REMOVE_PRODUCTS_FROM_BASKET;
  payload: IProductBasket;
}

export type ProductsAction = IGetProductsAction | IAddProductsToBasket | IRemoveProductsFromBasket; // action1 | action2
