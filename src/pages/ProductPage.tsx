import { useParams } from "react-router-dom";
import { ProductSeparated } from "../components";
import useTypedSelector from "../data/hooks/useTypedSelector";
import { IProduct } from "../types/IProduct";

function ProductPage() {
  const { id } = useParams();

  const products = useTypedSelector((state) => state.products.products);

  const productEl =
    products && products.find((el: IProduct) => el.id === Number(id));

  return (
    <div className="column">
      {
        // отдельная карточка без кнопки перейти к товару
        productEl && (
          <ProductSeparated product={productEl} key={productEl?.id} />
        )
      }
      {!productEl && <div>Товар не найден</div>}
    </div>
  );
}

export default ProductPage;
