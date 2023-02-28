import axios, { AxiosError } from "axios";
import { getProductsAction } from "../reducers/productsReducer";
import { Dispatch } from 'redux';
import { ProductsAction } from "../../types/productsReducer";


export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(getProductsAction(response.data));
      })
      .catch((e: unknown) => {
        const error = e as AxiosError;
        console.log(error);
      });
  };
};