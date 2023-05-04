import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {productsReducer} from "./reducers/productsReducer";
import { AppStore } from "../types/storeTypes";

const rootReducer = combineReducers({
  products: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store: AppStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
