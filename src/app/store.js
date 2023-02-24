import { createStore, combineReducers, applyMiddleware } from 'redux';
import testReducer from './reducers/testReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';

const rootReducer = combineReducers({test: testReducer, products: productsReducer})

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;