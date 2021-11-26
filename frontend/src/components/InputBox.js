const InputBox = (props) => {
    return (
        <>
        <input type = {props.type} id={props.id} name={props.id} placeholder={props.label}></input>
        </>
    )
}

export default InputBox
