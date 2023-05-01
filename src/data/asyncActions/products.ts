import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { ProductsAction } from "../../types/productsReducerTypes";
import { getProductsAction } from "../reducers/productsReducer";

const fetchProducts = () => async (dispatch: Dispatch<ProductsAction>) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      dispatch(getProductsAction(response.data));
    })
    .catch((e: unknown) => {
      const error = e as AxiosError;
      console.error(new Error("error", error));
    });
};

export default fetchProducts;
