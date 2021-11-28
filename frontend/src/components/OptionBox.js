
const OptionBox = (props) => {
    return (
        <>
        <label class="select_box">
            <span>{props.title}</span>
            <select class="item" id={props.element_id} name={props.element_id} form={props.element_id} placeholder={props.title}>{props.options}</select>
        </label>
        </>
    )
}

export default OptionBox
