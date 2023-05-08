import { IProduct, IProductBasket } from "../../types/IProduct";
import {
  IProductsState,
  ProductsActionTypes,
  ProductsAction,
} from "../../types/productsReducerTypes";

const initialState: IProductsState = {
  products: [],
  basket: [],
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
      if (state.basket.find((product: IProductBasket) => product.id === action.payload.id)) {
        return {
          ...state,
          basket: state.basket.map((item : IProductBasket) => item.id === action.payload.id
            ? {
              ...item,
              qty: item.qty ? item.qty  + 1 : 2,
            }
            : item
          ),
        };
      }
    
      return {
        ...state,
        basket: [...state.basket, action.payload],
        // totalPrice: state.totalPrice + payload.price,
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
