import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import noteService from './services/person'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')

  const [numbers,setNumber] = useState('')

  const [search, setSearch] = useState('')
  
useEffect(()=>{
  console.log('effect')
  noteService
  .getAll()
  .then(response =>{
    console.log('promise fulfilled')
    setPersons(response.data)
  })
  },[])
 
  const addNameNumber = (event) =>{
    event.preventDefault() //prevents page from refreshing
    if(newName == '' || numbers == ''){
      alert('Name and Number must be provided')

    }else if(persons.find(person=> person.name == newName)){
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
    noteService
.create(nameObject)
.then(response => {
  console.log(response.data)
})
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