export default function Button(props){
    return <button className={props.class} onClick={props.handleClick} >{props.btnText}</button>
}