// import s from "./BasketCounter.module.scss";
import { shallowEqual } from "react-redux";
import useTypedSelector from "../../../data/hooks/useTypedSelector";


function BasketCounter() {
  const totalCount = useTypedSelector((state) => state.products.basket.totalCount, shallowEqual);

  return <div className={`counter ${totalCount === 0 && "counter_none"}`}>{totalCount}</div>;
}

export default  BasketCounter;
