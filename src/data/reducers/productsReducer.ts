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

  // ---------- GET_PRODUCTS ----------
  case ProductsActionTypes.GET_PRODUCTS:
    return {
      ...state,
      products: action.payload.map((item) => Object.assign(item, { price: Math.round(item.price) }))
    };
  
  // ---------- ADD_PRODUCTS_TO_BASKET ----------
  case ProductsActionTypes.ADD_PRODUCTS_TO_BASKET:
    if (state.basket.list.find((product: IProductBasket) => product.id === action.payload.id)) {
      return {
        ...state,
        basket:
          {
            ...state.basket,
            list: state.basket.list.map((item: IProductBasket) => item.id === action.payload.id
              ? {
                ...item,
                qty: item.qty ? item.qty + 1 : 2,
              }
              : item,
            ),
            totalPrice: state.basket.totalPrice + action.payload.price,
            totalCount: state.basket.totalCount + 1,
          }
      };
    }

    return {
      ...state,
      basket:
      {
        ...state.basket,
        list: [...state.basket.list, action.payload],
        totalPrice: state.basket.totalPrice + action.payload.price,
        totalCount: state.basket.totalCount + 1,
      },
    };
    
    // ---------- REMOVE_PRODUCTS_FROM_BASKET ----------
    case ProductsActionTypes.REMOVE_PRODUCTS_FROM_BASKET:
      if (state.basket.list.find((product: IProductBasket) => product.id === action.payload.id && product && product.qty && product.qty > 1)) {
        return {
          ...state,
          basket:
            {
              ...state.basket,
              list: state.basket.list.map((item: IProductBasket) => item.id === action.payload.id
                ? {
                  ...item,
                  qty: item.qty && item.qty - 1,
                }
                : item,
              ),
              totalPrice: state.basket.totalPrice - action.payload.price,
              totalCount: state.basket.totalCount - 1,
            }
        };
      }

      return {
        ...state,
        basket:
          {
            ...state.basket,
            list: state.basket.list.filter(item => item.id !== action.payload.id),
            totalPrice: state.basket.totalPrice - action.payload.price,
            totalCount: state.basket.totalCount - 1,
          }
        };
    
    // ---------- default ----------
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

const removeProductsFromBasketAction = (payload: IProduct): ProductsAction => ({
  type: ProductsActionTypes.REMOVE_PRODUCTS_FROM_BASKET,
  payload,
});

export { 
  getProductsAction, 
  addProductsToBasketAction, 
  productsReducer, 
  removeProductsFromBasketAction 
};
