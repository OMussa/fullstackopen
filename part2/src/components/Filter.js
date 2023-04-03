const Filter = (props)=>{
    return(
<form>
filter by name <input onChange = {props.handleChange} value = {props.valuee}></input>
</form>
    )
}
//creates a from with an input with an onChange which will be used to console log the changes aswell as updating the 'search' state and valuee prop which will be set to the 'search state
export default Filter