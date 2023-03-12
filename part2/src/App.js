import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
  ]) 
  const [newName, setNewName] = useState('')

  const [numbers,setNumber] = useState('')
  

 
  const addNameNumber = (event) =>{
    event.preventDefault() //prevents page from refreshing
    if(persons.find(person=> person.name == newName)){
      alert(`${newName} is already added to the phonebook`)
    }else if(persons.find(person=> person.number == numbers)){
      alert(`${numbers} is already added to the phonebook`)
    }else{
    const nameObject = {
      name: newName,
      number: numbers,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <form >
        <div> name: <input  onChange={handleNoteChange} /> </div> 
        <div> number: <input onChange={handleNumberChange} /> </div>
        <div> <button type="submit" onClick={addNameNumber}>add</button> </div>
      </form>
      <h2>Numbers</h2>
<div>
  {persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
  
</div>
      
    </div>
    
  )
}

export default App 