import axios, { AxiosError } from "axios";
import { getProductsAction } from "../app/reducers/productsReducer";
import {Dispatch} from 'redux';


// type tfetchProductsType = () => (dispatch: Dispatch) => void;
type fetchProductsType = () => any; // TODO: rewrite without any

export const fetchProducts: fetchProductsType = () => {
  return function (dispatch: Dispatch) {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data)
        dispatch(getProductsAction(response.data));
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        console.log(error);
      });
  };
};



// export const fetchProducts  = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
//   return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         console.log(response.data);
//         dispatch(getProductsAction(response.data));
//       })
//       .catch((e: unknown) => {
//         const error = e as AxiosError;
//         console.log(error);
//       });
//   };
// };
