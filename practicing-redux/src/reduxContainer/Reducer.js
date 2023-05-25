import * as types from './Types';
const initialState = {
    name: "Prasannakumar Jha",
    age: 27,
    gender: "Male",
    designation: "SDE"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.getName:
            return { ...state, name: state.name };

        case types.getAge:
            return { ...state, age: state.age };

        case types.getGender:
            return { ...state, gender: state.gender };

        case types.getDesignation:
            return { ...state, designation: state.designation };

        case types.setName:
            return { ...state, name: action.updatedName };

        case types.setAge:
            return { ...state, age: action.updateAge };

        case types.setGender:
            return { ...state, gender: action.updateGender };

        case types.setDesignation:
            return { ...state, designation: action.updateDesignation };

        default:
            return state;
    }
}

export default profileReducer;