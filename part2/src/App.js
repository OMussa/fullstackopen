import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import noteService from './services/person'
import { v4 as uuidv4 } from 'uuid';
import Notification from './components/Message'

const App = () => {
  const [persons, setPersons] = useState(null)  // stores the people currently in the phonebook
  const [newName, setNewName] = useState('') // tracks the user input for the  new name thats going to be added to the phonebook

  const [numbers,setNumber] = useState('')  // tracks the user input for the  new number thats going to be added to the phonebook

  const [search, setSearch] = useState('') // used to filter the phonebook based on the user's input in the search bar.
  
  const [eMessage, setEMessage] = useState(null)
useEffect(()=>{ 
  console.log('effect')
  noteService
  .getAll()
  .then(response =>{
    console.log('promise fulfilled')
    setPersons(response.data)
  })
  },[])  // this useEffect is used to fetch data from the server when the component is first mounted using the getAll method (GET) thats in the person.js file located in the services folder
 if(!persons){
  return null
 }
  const addNameNumber = (event) =>{ 
    event.preventDefault() //prevents page from refreshing
    if(newName === '' || numbers === ''){
      alert('Name and Number must be provided') 
    } //statment checks if the user has filled in the name or number form if not it alerts the message
    else {
      const existingPerson = persons.find(person => person.name === newName) // this finds out if the new name the user has filled in is already a name stored in the phonebook
      if (existingPerson) { // if the name inputted is already stored in the phonebook
        const confirmed = window.confirm(`${newName} is already added to the phonebook. Do you want to update their phone number?`) // displays a confirmation message 
        if (confirmed) { // if user ok's the message
          const updatedPerson = {...existingPerson, number: numbers} // creates a new object using the spread operator which allows objects to be copied into new objects without changing the original and the number property gets updated to the numbers property which is the form
          noteService
            .update(existingPerson.id, updatedPerson) // update method (PUT) from person.js file located in the services folder and its getting passed in two arguments first being the id of the existing person that we are updating the 2nd argument is an object that contains the updated information for the person
            .then(response => { //promise that handles response if update is successful
              setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data)) // This is a function that is called for every element in the persons array. The function compares the id property of each element in the persons array with the id property of existingPerson. If the id property matches it returns response.data which is the updated person object. Otherwise it returns the original person object.
              setEMessage({
               message: `${existingPerson.name} has been updated`,
                className: 'success'
              }
              )
              setTimeout(() =>{
                setEMessage(null)
              },5000)
            }) 
            .catch(error => {
              setEMessage({
                message:`${existingPerson.name} has already been removed from server`,
                className:'error'
              }
              )
              setTimeout(() =>{
                setEMessage(null)
                window.location.reload()
              },3000)
              
              console.log(`Error updating person with ID ${existingPerson.id}: ${error}`)
            }) // if there is an error updating this will catch it and return a console log statment
        }
      } else {
        const nameObject = {  // creates a new object with these properties
          name: newName,  // name property = to the name filled out in the form 
          number: numbers, // number property = to the number filled out in the form 
          id: uuidv4() // id is a randomly generated key using uuid
        }
        setPersons(persons.concat(nameObject)) // updates the person state variable with the nameObject. concat() creates a new array that includes the elements from the original array (persons) and the nameObject variable, which contains the new person's name, number, and an id.
        setNewName('') // resets the state to empty as you would see using react developer tools component feature
        setNumber('')  // resets the state to empty as you would see using react developer tools component feature
        noteService
          .create(nameObject) // nameObject being passed into the create method (POST) from person.js file located in the services folder which creates a new person in the db. 
          .then(response => { 
            setEMessage({
             message:`${nameObject.name} has been added to the phonebook`,
             className:'success'
            }
            )
            setTimeout(() => {
              setEMessage(null)
            }, 5000)
            console.log(response.data)
          }) // if promise the is successful the server returns a response containing the newly created person object, which is logged to the console
          .catch(error => {
            console.log(`Error creating person: ${error}`)
          }) // catches any error and returns the console log
      }
    }
  }
  
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  //   logs the current value of the name input field to the console, and updates the newName state variable to the current value of the name input field using setNewName.
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
  }
  //   logs the current value of the number input field to the console, and updates the numbers state variable to the current value of the name input field using setNumber.
  const handleFilter = (event) => {
    console.log(event.target.value)
    setSearch(event.target.value)
  }
//   logs the current value of the filter input field to the console, and updates the search state variable to the current value of the name input field using setSearch.
  

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id) //finds the person with the specific id
    const confirmed = window.confirm(`Are you sure you want to delete ${personToDelete.name}?`) // conformation for deleting the person
    
    if (confirmed) {
      noteService
        .remove(id) // id getting passed into the remove (DELETE) method from person.js file located in the services folder which deletes a specific id
        .then(response => {
          setPersons(persons.filter(person => person.id !== id))
          setEMessage({
            message:`Number has been deleted`,
            className:'success'
          }
          ) 
          setTimeout(()=>{
          setEMessage(null)
          },5000)
        }) //if the promise is successful the phonebook gets updated using the filter method that filters out the id's that wasnt selected to be deleted (returning the id's that dont equal the id user wants to delete)
        .catch(error => {
          console.log(`Error deleting person with ID ${id}: ${error}`)
        }) //catches any error and console logs this message
    }
  }
  
  
  return (
    <div>
      <h2>Phonebook</h2>
     <Notification message={eMessage} />
      <Filter handleChange = {handleFilter} valuee = {search}/>
      <div>{persons.filter(person => person.name == handleFilter )}</div>
      <h2>add a new</h2>
      <PersonForm handleNote = {handleNoteChange} handleNumber ={handleNumberChange} NameNumber ={addNameNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} handleDelete = {handleDelete}/>
      
    </div>
    
  )
}

export default App 