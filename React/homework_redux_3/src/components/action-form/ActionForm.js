import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {calcAddNumber} from "../../redux";

import './action_form.css';

export const ActionForm = () => {
    const [fieldValue, setFieldValue] = useState('');

    const dispatch = useDispatch();

    const addNumber = () => {
        dispatch(calcAddNumber(!isNaN(+fieldValue) ? +fieldValue : 0));
        setFieldValue('');
    }

    return (
        <div className="action-form">
            <label htmlFor="number-field">Число:</label>
            <input
                key="number-field"
                id="number-field"
                value={fieldValue}
                onChange={({target:{value}} )=>
                    setFieldValue(value)}
            />
            <button
                onClick={addNumber}
                className="action-button">
                Submit
            </button>
        </div>
    );
}
