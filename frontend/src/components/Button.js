import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ button_label, link }) => {

    return (
        <Link to={link}>
            <div className = "btnParent">
                <button type="submit" className = "btn"> {button_label} </button>
            </div>
        </Link>
    );
}

export default Button;