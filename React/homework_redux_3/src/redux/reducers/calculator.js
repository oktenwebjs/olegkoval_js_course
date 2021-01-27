import {ADD_NUMBER, RESET} from "../action-types";

const initialState = {
    calculator: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_NUMBER: {
            return {...state, calculator: state.calculator + action.payload};
        }
        case RESET: {
            return {...state, calculator: 0};
        }
        default: {
            return state;
        }
    }
}