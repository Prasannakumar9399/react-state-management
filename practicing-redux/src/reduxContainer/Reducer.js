const initialState = {
    name: "Prasannakumar Jha",
    age: 27,
    gender: "Male",
    designation: "SDE"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'getName':
            return { ...state, name: state.name };

        case 'getAge':
            return { ...state, age: state.age };

        case 'getGender':
            return { ...state, gender: state.gender };

        case 'getDesignation':
            return { ...state, designation: state.designation };

        case 'setName':
            return { ...state, name: action.updatedName };

        case 'setAge':
            return { ...state, age: action.updateAge };

        case 'setGender':
            return { ...state, gender: action.updateGender };

        case 'setDesignation':
            return { ...state, designation: action.updateDesignation };


        default:
            return state;
    }
}

export default profileReducer;