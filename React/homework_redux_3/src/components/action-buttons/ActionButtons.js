import React from "react";
import {useSelector} from "react-redux";
import {ActionButton} from "../action-button";

export const ActionButtons = () => {
    const action_buttons = useSelector(({calculator: {action_buttons}}) => action_buttons);

    return (
        <div>
            {
                action_buttons.map(value => <ActionButton key={'key' + value} number={value}/>)
            }
        </div>
    );
}