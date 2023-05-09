import { IProduct, IProductBasket } from "../../types/IProduct";
import {
  IProductsState,
  ProductsActionTypes,
  ProductsAction,
} from "../../types/productsReducerTypes";

const initialState: IProductsState = {
  products: [],
  basket: {
    list: [], 
    totalPrice: 0, 
    totalCount: 0
  },
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
      if (state.basket.list.find((product: IProductBasket) => product.id === action.payload.id)) {
        return {
          ...state,
          basket: 
            {...state.basket, 
            list: state.basket.list.map((item : IProductBasket) => item.id === action.payload.id
            ? {
              ...item,
              qty: item.qty ? item.qty  + 1 : 2,
            }
            : item,
            ),
          totalPrice: state.basket.totalPrice + action.payload.price,
          totalCount: state.basket.totalCount + 1,}
        };
      }
    
      return {
        ...state,
        basket: 
          {...state.basket,
          
            list: [...state.basket.list, action.payload], 
            totalPrice: state.basket.totalPrice + action.payload.price,
            totalCount: state.basket.totalCount + 1,
          }
        ,
      };
    default:
      return state;
  }
};

const getProductsAction = (payload: IProduct[]): ProductsAction => ({
  type: ProductsActionTypes.GET_PRODUCTS,
  payload,
});

const addProductsToBasketAction = (payload: IProduct): ProductsAction => ({
  type: ProductsActionTypes.ADD_PRODUCTS_TO_BASKET,
  payload,
});

export { getProductsAction, addProductsToBasketAction, productsReducer };
