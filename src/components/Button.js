import React from 'react';

const Button = props => {
    return(
        <button id='btn' style={props.style} onClick={props.onClick}>
            {props.btnText}
        </button>
    )
}
export default Button;
