const Filter = (props)=>{
    return(
<form>
filter by name <input onChange = {props.handleChange} value = {props.valuee}></input>
</form>
    )
}
export default Filter