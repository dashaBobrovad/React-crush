// import s from "./Counter.module.scss";

export enum CounterSizeTypes {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

interface CounterProps {
  count: number;
  size: CounterSizeTypes;
}

function Counter({ count, size}: CounterProps) {
  return <div className={`counter counter--${size}`}>{count}</div>;
}

export default Counter;
