// import s from "./BasketCounter.module.scss";

export enum BasketCounterSizeTypes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface BasketCounterProps {
  count: number;
  size: BasketCounterSizeTypes;
}

function BasketCounter({ count, size}: BasketCounterProps) {
  return <div className={`counter counter_${size}`}>{count}</div>;
}

export default  BasketCounter;
