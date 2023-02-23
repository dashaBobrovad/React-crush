import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "../features/counter/counterSlice.js";

function AboutPage() {
const count = useSelector((state: any) => state.test.value);
const dispatch = useDispatch();

  return (
    <div>
      About page
      <button onClick={()=>dispatch({type: 'TEST', payload: 10})}>click me!</button>
      {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
    </div>
  );
}

export default AboutPage;
