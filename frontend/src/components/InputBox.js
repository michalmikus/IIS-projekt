import { useState } from "react";

const InputBox = (props) => {

    return (
        <>
            <input type = {props.type} id={props.id} name={props.id} placeholder={props.label} value={props.value}></input>
        </>
    )
}

export default InputBox
