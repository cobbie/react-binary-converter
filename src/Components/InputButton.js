import React from 'react';
import './inputButton.css'

const inputButton = props => {
    return(
        <div>
        <input 
        className="inputField" 
        type="text" 
        placeholder={props.placeholderVal + " value..."}
        size="40"
        value={props.value}
        onChange = {props.onChange}
        />
        </div>
    )
}

export default inputButton;