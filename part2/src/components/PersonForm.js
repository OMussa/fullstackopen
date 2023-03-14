const PersonForm = (props) =>{
    return(
        <form >
        <div> name: <input  onChange={props.handleNote} /> </div> 
        <div> number: <input onChange={props.handleNumber} /> </div>
        <div> <button type="submit" onClick={props.NameNumber}>add</button> </div>
      </form>
    )
}


export default PersonForm