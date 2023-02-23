import { createStore, combineReducers } from 'redux';
import testReducer from './reducers/testReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({test: testReducer})

const store = createStore(rootReducer, composeWithDevTools());

export default store;