import { IProduct } from "../../../types/IProduct";
import { Icon, Picture } from "../../index";
import s from "./Product.module.scss";

interface IProductCardSeparatedProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
function ProductCardSeparated({ product }: IProductCardSeparatedProps) {
  return (
    <div className={`${s.product} ${s["product--separated"]} flex flex-column`}>
      <Picture src={product.image} parentClass={s.image} />
      <div className={s.content}>
        <h2 className={`${s.title} ellipsis-2`}>{product.title}</h2>
        <p className={s.price}>{product.price.toFixed(2)} $</p>
        <p className={s.category}>{product.category}</p>
        <div className={s.info}>
          <p className={s.rate}>
            {product.rating.rate.toFixed(1)} <Icon icon="star" color="white"/>
          </p>
          <p className={s.count}>
            <span>{product.rating.count}</span> <span>pieces</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSeparated;
