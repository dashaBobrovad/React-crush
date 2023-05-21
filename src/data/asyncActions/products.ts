import { Dispatch } from "redux";
import { ProductsAction } from "../../types/productsReducerTypes";
import { getProductsAction } from "../reducers/productsReducer";
import dataMocks from "../mocks";

const path = "https://api.github.com/repos/dashaBobrovad/React-crush";

// TODO: если понадобится повторно, вынести в отдельную функцию
const fetchProducts = () => async (dispatch: Dispatch<ProductsAction>) => {
  // await fetch (`${path}/contents/public/db/data.json`)
  await fetch (`${path}/contents/public/db/data.jвson`)
    .then (d => d.json ())
    .then (d => fetch (`${path}/git/blobs/${d.sha}`))
    .then (d => d.json())
    .then (d => dispatch(getProductsAction(JSON.parse(window.atob (d.content)))))
    .catch((e: unknown) => {
      const error = e as Error;
      console.error(new Error("error", error));
      dispatch(getProductsAction(dataMocks));
    }
  );
};

export default fetchProducts;
