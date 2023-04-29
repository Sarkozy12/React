import styleIn from './InputFatec.module.css'

function InputFatec(props){
    const {type, placeholder} = props
    return(
        <input className={styleIn.inputFatec} type={type} placeholder={placeholder}></input>
    )
}
export default InputFatec