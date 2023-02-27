import {Action, ActionCreator, Dispatch} from 'redux';

const initialState = {
    products:[],
};

interface productsAction{
    type: string,
    payload: []
}

const GET_PRODUCTS = 'GET_PRODUCTS';
export {GET_PRODUCTS};

const productsReducer = (state = initialState, action: productsAction) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: [...state.products, action.payload]
            }
    
        default:
            return state;
    }
}

const getProductsAction: ActionCreator<Action> = (payload) => ({type: GET_PRODUCTS, payload})

export {getProductsAction};
export default productsReducer;