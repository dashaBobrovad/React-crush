// import s from "./BasketCounter.module.scss";
import { shallowEqual } from "react-redux";
import useTypedSelector from "../../../data/hooks/useTypedSelector";

export enum BasketCounterSizeTypes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface BasketCounterProps {
  size: BasketCounterSizeTypes;
}

function BasketCounter({ size}: BasketCounterProps) {
  const totalCount = useTypedSelector((state) => state.products.basket.totalCount, shallowEqual);

  return <div className={`counter counter_${size}`}>{totalCount}</div>;
}

export default  BasketCounter;
