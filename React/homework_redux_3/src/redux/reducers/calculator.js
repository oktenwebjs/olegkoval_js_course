import {ADD_NUMBER, RESET} from "../action-types";

const initialState = {
    calculator: 0,
    action_buttons: [1, -1, 100, -100, 0]
}

export default (state = initialState, {type,payload }) => {
    switch(type) {
        case ADD_NUMBER: {
            return {...state, calculator: state.calculator + payload};
        }
        case RESET: {
            return {...state, calculator: 0};
        }
        default: {
            return state;
        }
    }
}
