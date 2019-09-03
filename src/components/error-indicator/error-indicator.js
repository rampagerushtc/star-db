import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src ={icon} alt="error"></img>
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we alredy sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;