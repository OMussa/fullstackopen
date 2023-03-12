import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')

  const [numbers,setNumber] = useState('')

  const [search, setSearch] = useState('')
  

 
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
    setNumber('')
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
  const handleFilter = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
  const filtered = persons.filter(person => person.name.includes(search))
 
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        filter by name <input value={search} onChange={handleFilter}></input>
      </form>
      <div>{persons.filter(person => person.name == handleFilter )}</div>
      <h2>add a new</h2>
      <form >
        <div> name: <input  onChange={handleNoteChange} /> </div> 
        <div> number: <input onChange={handleNumberChange} /> </div>
        <div> <button type="submit" onClick={addNameNumber}>add</button> </div>
      </form>
      <h2>Numbers</h2>
<div>
{filtered.map(person => (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        ))}
  
</div>
      
    </div>
    
  )
}

export default App 