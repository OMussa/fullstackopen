const Persons = ({persons, search, handleDelete}) => { //Persons takes in three props but instead of using 'props' its destructured making the code more readable and easier to work with (persons instead of props.persons)
  const filtered = persons.filter(person => person.name.includes(search)) // filtering out the names from the person arrays using the include method which is looking at whats inputted into the search form. 
  
  return (
    <div>
      {filtered.map(person => ( //mapping through the filtered array 
        <div key={person.name}>         {/*The key attribute is used to provide a unique identifier for each div element. This is necessary for React to efficiently update the DOM when changes are made. */}
          {person.name} {person.number} {/*this returns the name and number of the object that was filtered by the search */}
          <button onClick={() => handleDelete(person.id)}>Delete</button>  {/*Returns a button that allows for the object to be deleted */}
        </div>
      ))}
    </div>
  )

}
export default Persons