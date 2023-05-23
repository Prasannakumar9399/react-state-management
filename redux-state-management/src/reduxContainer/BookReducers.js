import { buyBook } from "./BookTypes";

const initialState = {
    NumberOfBooks: 20
}

const BookReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case buyBook:
            return { ...state, NumberOfBooks: ((state.initialState) - 1 )}


        default: return state;
    }
}

export default BookReducer;