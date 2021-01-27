import {ADD_NUMBER, RESET} from "../action-types";

export const calcAddNumber = (value) => (dispatch) => {
    dispatch({type: ADD_NUMBER, payload: value});
};

export const calcReset = () => (dispatch) => {
    dispatch({type: RESET});
};