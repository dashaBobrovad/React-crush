import { IProduct } from "../../../types/IProduct";
import { Button, Picture } from "../../index";
import s from "./ProductCardSeparated.module.scss";

interface IProductCardSeparatedProps {
  product: IProduct;
}

function ProductCardSeparated({ product }: IProductCardSeparatedProps) {
  
  return (
    <div className={`${s.product} flex flex-row`}>
      <Picture src={product.image} parentClass={s.image} alt={product.title} />
      <div className={s.content}>
        <div>Коротко о товаре</div>
        <div>
          <div>category...{product.category}</div>
          <div>description (сделать разворачивающимся)...{product.description}</div>
          <div>{product.price}</div>
          <Button>Добавить в корзинy</Button>
          {/* Далее открывается попап и меняется кнопочка на каунтер */}
        </div>
      </div>
    </div>
  );
}

export default ProductCardSeparated;
