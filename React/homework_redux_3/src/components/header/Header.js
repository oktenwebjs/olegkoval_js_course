import React from 'react';
import {useSelector} from "react-redux";

import './header.css';

export const Header = () => {

    const calculator = useSelector(({calculator: {calculator}}) => calculator);

    return (
        <div className="header">
            <h3>Calculator</h3>
            <div className="current-value">{calculator}</div>
        </div>
    );
}