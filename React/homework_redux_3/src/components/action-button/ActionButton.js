import React from 'react';
import {useDispatch} from "react-redux";
import {calcReset, calcAddNumber} from "../../redux";

export const ActionButton = ({number}) => {

    const dispatch = useDispatch();

    const addNumber = (number) => {
        dispatch(calcAddNumber(number))
    }
    const reset = () => {
        dispatch(calcReset())
    }

    return (
        <button
            onClick={number !==0 ? () => addNumber(number) : () => reset()}
            className="action-button">
            {number !==0 ? number : 'Reset'}
        </button>
    )
}