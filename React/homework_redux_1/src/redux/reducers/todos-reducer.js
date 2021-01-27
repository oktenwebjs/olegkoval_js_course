import {SET_TODOS, TOGGLE_TODO_STATUS, REMOVE_TODO} from "../ation-types";

const initialState = {
    todos: []
}
export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TODOS: {
            return {...state, todos: action.payload}
        }
        case TOGGLE_TODO_STATUS: {
            return {...state, todos: []}
        }
        case REMOVE_TODO: {
            return {...state, todos: []}
        }
        default: {
            return {...state}
        }
    }
}