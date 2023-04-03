const PersonForm = (props) =>{
    return(
        <form >
        <div> name: <input  onChange={props.handleNote}  /> </div> 
        <div> number: <input onChange={props.handleNumber} /> </div>
        <div> <button type="submit" onClick={props.NameNumber}>add</button> </div>
      </form>
    )
}
// the first div creates the 'name:' and input field that uses the onChange method which takes in a placeholder for how it's going to be handled called handleNote
// the second div creates the 'number:' and input field that uses the onChange method which takes in a placeholder for how it's going to be handled called handleNumber
// the third div creates a button that uses the onClick method which takes in a placeholder for how it's going to be handled called NameNumber
export default PersonForm