import { IProduct } from '../../types/IProduct';
import { IProductsState, ProductsActionTypes, ProductsAction } from '../../types/productsReducerTypes';

const initialState: IProductsState = {
    products: [],
    basket: [],
};

const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            };
        case ProductsActionTypes.ADD_PRODUCTS_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };
        default:
            return state;
    }
};

const getProductsAction = (payload: IProduct[]) => ({ type: ProductsActionTypes.GET_PRODUCTS, payload });
const addProductsToBasketAction = (payload: IProduct) => ({type: ProductsActionTypes.ADD_PRODUCTS_TO_BASKET, payload});

export { getProductsAction, addProductsToBasketAction };
export default productsReducer;