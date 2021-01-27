import {INC_COUNTER, DEC_COUNTER, RESET_COUNTER} from "../ation-types";

const initialState = {
    counter: 0
}
export const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INC_COUNTER: {
            return {...state, counter: state.counter + 1}
        }
        case DEC_COUNTER: {
            return {...state, counter: state.counter - 1}
        }
        case RESET_COUNTER: {
            return {...state, counter: 0}
        }
        default: {
            return {...state}
        }
    }
}