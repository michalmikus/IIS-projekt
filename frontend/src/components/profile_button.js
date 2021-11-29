import React from "react";
import { Link } from "react-router-dom";

export const ProfileButton = ( props ) => {

    return (
        <Link to={props.link}>
            <div className = "btnParent">
                <button type="submit" className = "btn" onClick={props.onClick}> {props.label}</button>
            </div>
        </Link>
    );
}

export default ProfileButton;