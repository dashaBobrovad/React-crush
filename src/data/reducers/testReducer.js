// action = {
// type: 'test',
// payload: []
// }

const initialState = {
    value:0,
    dataArr: [],
    dataWithObjs: [
        {id: Date.now(), name: 'test'}
    ]
};

const TEST = 'TEST';
const ADD_DATA_ARR = 'ADD_DATA_ARR';
const ADD_DATA_ITEM = 'ADD_DATA_ITEM';
export {TEST, ADD_DATA_ARR, ADD_DATA_ITEM};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEST:
            return {
                ...state,
                value: state.value + action.payload
            }
        case ADD_DATA_ARR:
            return {
                ...state,
                dataArr: [...action.payload]
            }
        case ADD_DATA_ITEM: 
        return{
            ...state,
            dataWithObjs: [...state.dataWithObjs, {id: Date.now(), name: action.payload}]
            
        }
    
        default:
            return state;
    }
}

const testAction = (payload) => ({type: TEST, payload});
const addDataArrAction = (payload) => ({type: ADD_DATA_ARR, payload});
const addDataItemAction = (payload) => ({type: ADD_DATA_ITEM, payload});

export {testAction, addDataArrAction, addDataItemAction};
export default testReducer;