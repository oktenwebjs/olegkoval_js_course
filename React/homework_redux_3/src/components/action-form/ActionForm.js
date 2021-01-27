import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {calcAddNumber} from "../../redux";

import './action_form.css';

export const ActionForm = () => {
    const [number, setNumber] = useState(0);
    const [fieldValue, setFieldValue] = useState('');

    const dispatch = useDispatch();

    const addNumber = () => {
        setFieldValue('');
        dispatch(calcAddNumber(number));
        setNumber(0);
    }

    const onNumberChange = (event) => {
        setFieldValue(event.target.value);
        const number = Number.parseInt(event.target.value, 10);
        setNumber(!Number.isNaN(number) ? number : 0);
    }

    return (
        <div className="action-form">
            <label htmlFor="number-field">Число:</label>
            <input key="number-field" id="number-field" value={fieldValue} onChange={event => onNumberChange(event)}/>
            <button
                onClick={() => addNumber(number)}
                className="action-button">
                Submit
            </button>
        </div>
    );
}