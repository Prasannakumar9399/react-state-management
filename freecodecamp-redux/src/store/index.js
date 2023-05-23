// import createStore from redux.
import { createStore } from 'redux';
//This is a reducer function with name reducerFn and initialize state with object counter value = 0. 
const reducerFn = (state = { counter: 10 }, action) => {

    /* 2 rule for reducer
    (a) It should always contains synchronous code.
    (b)We should not mutate the original state. 
    */
    if (action.type === "INC") {
        return { counter: state.counter + 1 };
    }
    else if (action.type === "DEC") {
        return { counter: state.counter - 1 };

    }
    else if (action.type === "ADD")
        return { counter: state.counter + action.payload };

    return state;
}
// store requires reducer function so we need to create reducer with any name like reducerFn.
const store = createStore(reducerFn);

export default store;