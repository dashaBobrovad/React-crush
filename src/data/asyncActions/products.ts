import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import { ProductsAction } from "../../types/productsReducerTypes";
import { getProductsAction } from "../reducers/productsReducer";
import dataMocks from "../mocks";

const fetchProducts = () => async (dispatch: Dispatch<ProductsAction>) => {
  axios
    .get("http://localhost:3000/db/data.json")
    .then((response) => {
      dispatch(getProductsAction(response.data));
    })
    .catch((e: unknown) => {
      const error = e as AxiosError;
      console.error(new Error("error", error));
      dispatch(getProductsAction(dataMocks));
    });
};

export default fetchProducts;
