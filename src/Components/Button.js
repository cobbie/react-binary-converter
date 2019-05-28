import React from 'react';
import './button.css'

const Button = props => {

    return(
        <div>
            <select className="selectButton" defaultValue="Choose here">
            <option value="item1">{props.item1}</option>
            <option value="item2">{props.item2}</option>
            <option value="item3">{props.item3}</option>
            </select>
        </div>
    )


}

export default Button;