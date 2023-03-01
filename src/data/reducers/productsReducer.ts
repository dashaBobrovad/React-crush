import { IProduct } from '../../types/IProduct';
import { IProductsState, ProductsActionTypes, ProductsAction } from '../../types/productsReducerTypes';

const initialState: IProductsState = {
    products:[]
};

const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
    switch (action.type) {
        case ProductsActionTypes.GET_PRODUCTS:
            return {
                ...state,
                products: [...action.payload]
            }
    
        default:
            return state;
    }
}

const getProductsAction = (payload: IProduct[]) => ({type: ProductsActionTypes.GET_PRODUCTS, payload})

export {getProductsAction};
export default productsReducer;