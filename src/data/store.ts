import { createStore, combineReducers, applyMiddleware } from 'redux';
import testReducer from './reducers/testReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import { AppStore } from '../types/store';

const rootReducer = combineReducers({
    test: testReducer, 
    products: productsReducer
  })

export type RootState = ReturnType<typeof rootReducer>;

const store:AppStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;