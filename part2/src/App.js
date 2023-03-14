import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

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
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange = {handleFilter} valuee = {search}/>
      <div>{persons.filter(person => person.name == handleFilter )}</div>
      <h2>add a new</h2>
      <PersonForm handleNote = {handleNoteChange} handleNumber ={handleNumberChange} NameNumber ={addNameNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={search}/>
      
    </div>
    
  )
}

export default App 