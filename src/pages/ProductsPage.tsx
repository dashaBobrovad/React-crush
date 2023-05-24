import { useEffect } from "react";
import { Preview, ProductList } from "../components";
import fetchProducts from "../data/asyncActions/products";
import useTypedDispatch from "../data/hooks/useTypedDispatch";
import useTypedSelector from "../data/hooks/useTypedSelector";
import { getProductsAction } from "../data/reducers/productsReducer";

function ProductsPage() {
  const dispatch = useTypedDispatch();
  const reduxProducts = useTypedSelector((state) => state.products.products);
  // const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // TODO: + проверка с отключенным LS; нужно ли здесь это из локального достается итак (?)
    if (localStorage?.getItem("persistantState")) {
      dispatch(
        getProductsAction(
          JSON.parse(localStorage?.getItem("persistantState") as string).products.products.list
        )
        
      );
    } else {
      dispatch(fetchProducts());
      
    }
    // setIsLoaded(true);
  }, []);

  return (
    <>
      <Preview />

      <div className="column">
        <ProductList products={reduxProducts} />
      </div>
    </>
  );
}

export default ProductsPage;
