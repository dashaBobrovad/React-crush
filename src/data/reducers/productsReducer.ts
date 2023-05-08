import { IProduct } from "../../types/IProduct";
import {
  IProductsState,
  ProductsActionTypes,
  ProductsAction,
} from "../../types/productsReducerTypes";

const initialState: IProductsState = {
  products: [],
  basket: {},
};

const productsReducer = (
  state = initialState,
  action: ProductsAction
): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return {
        ...state,
        products: [...action.payload],
      };
    case ProductsActionTypes.ADD_PRODUCTS_TO_BASKET:
      return {
        ...state,
        // basket: [...state.basket, action.payload],
        // фильтровать так, что если совпадает id добавлять под 1 ключ
        // basket: [...state.basket, Object.assign(action.payload, {quantity: 1})],
        // basket: Object.assign(state.basket, {[action.payload.id]:Object.assign(action.payload, {quantity: true ? 1 : 0})}) 
        basket: Object.assign(
          state.basket,
          // test is not defined
          {[action.payload.id]:Object.assign(action.payload,state.basket[state.basket[action.payload.id as keyof typeof state.basket]][test as unknown as string] + 1)}
         
        )
      };
    default:
      return state;
  }
};

const getProductsAction = (payload: IProduct[]) => ({
  type: ProductsActionTypes.GET_PRODUCTS,
  payload,
});

const addProductsToBasketAction = (payload: IProduct) => ({
  type: ProductsActionTypes.ADD_PRODUCTS_TO_BASKET,
  payload,
});

export { getProductsAction, addProductsToBasketAction, productsReducer };
