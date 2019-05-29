import React from 'react';
import './button.css'

const Button = props => {

    return(
        <div>
            <select className="selectButton" defaultValue="Choose here" onChange={props.onChange} value={props.value}>
            <option value={props.item1}>{props.item1}</option>
            <option value={props.item2}>{props.item2}</option>
            <option value={props.item3}>{props.item3}</option>
            </select>
        </div>
    )


}

export default Button;