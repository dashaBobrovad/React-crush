// action = {
// type: 'test',
// payload: []
// }

const initialState = {
    value:0
};

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                value: state.value + action.payload
            }
    
        default:
            return state;
    }
}

export default testReducer;