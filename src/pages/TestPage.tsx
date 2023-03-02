import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { testAction, addDataArrAction, addDataItemAction } from "../data/reducers/testReducer";

function TestPage() {
  const value = useSelector((state: any) => state.test.value);
  const dataArr = useSelector((state: any) => state.test.dataArr);
  const dataWithObjs = useSelector((state: any) => state.test.dataWithObjs);

interface IObj{
  id: number,
  name: string,
}


// export const useAppDispatch: () => Dispatcher = useDispatch as any;
  const dispatch = useDispatch();

  return (
    <div className="column">
      TestPage page

      <button
        onClick={() => {
          dispatch(testAction(Number(prompt())));
        }}
      >
        test action
      </button>
      <div>value: {value}</div>



      <button
        onClick={() => {
          dispatch(addDataArrAction([1,2,3]));
        }}
      >
        get dataArr action
      </button>
      <div>dataArr: {dataArr.map((item: any) => <div>{item}</div>)}</div>
   


      <button
        onClick={() => {
          dispatch(addDataItemAction(prompt()))
        }}
      >
      Eminem moment
      </button>
      <div>data: {dataWithObjs.map((item: IObj) => <div>{item.id} persin said: "My name is {item.name}"</div>)}</div>
   


   {/* <button onClick={()=> dispatch(fetchProducts())}>get products</button> */}


    </div>
  );
}

export default TestPage;
