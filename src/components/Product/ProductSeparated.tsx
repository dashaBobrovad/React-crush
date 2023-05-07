import { faStar } from "@fortawesome/free-solid-svg-icons";
import { IProduct } from "../../types/IProduct";
import { Icon, Picture } from "..";
import s from "../../assets/scss/components/Product/Product.module.scss";

interface IProductSeparatedProps {
  product: IProduct;
}

// const ChildComponent = React.memo(function ChildComponent({ count }) {
// const Product = ({ product }: ProductProps) => {
function ProductSeparated({ product }: IProductSeparatedProps) {
  return (
    <div className={`${s.product} ${s["product--separated"]}`}>
      <Picture src={product.image} parentClass={s.image} />
      <div className={s.content}>
        <h2 className={`${s.title} ellipsis-2`}>{product.title}</h2>
        <p className={s.price}>{product.price.toFixed(2)} $</p>
        <p className={s.category}>{product.category}</p>
        <div className={s.info}>
          <p className={s.rate}>
            {product.rating.rate.toFixed(1)} <Icon icon={faStar} />
          </p>
          <p className={s.count}>
            <span>{product.rating.count}</span>{" "}
            <span>pieces</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductSeparated;
