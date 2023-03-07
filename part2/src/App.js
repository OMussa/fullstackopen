import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) =>{
    event.preventDefault() //prevents page from refreshing
    const nameObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div>
          name: <input  onChange={handleNoteChange} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
<div>
  {persons.map(person => <p key={person.id}>{person.name}</p>)}
</div>
      
    </div>
    
  )
}

export default App