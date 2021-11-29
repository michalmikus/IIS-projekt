import React from "react";
import { Link } from "react-router-dom";

export const Button = ( props ) => {

    return (
        <div className = "btnParent">
            <button type="submit" className = "btn" onClick={props.onClick}> {props.label}</button>
        </div>
    );
}

export default Button;