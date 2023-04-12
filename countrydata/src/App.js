import React from "react";
import { useEffect, useState } from 'react'
import noteService from './services/methods'
import Filter from "./components/Search";
import Countries from "./components/Countries";
const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(()=>{ 
    console.log('effect')
    noteService
    .getAll()
    .then(response =>{
      console.log('promise fulfilled')
     
     setCountries(response.data)
    })
    },[]) 
    
    const handleFilter = (event)=>{
      console.log(event.target.value)
      setSearch(event.target.value)
    }
  
  return (
   <div>
    <Filter onChange = {handleFilter} value={search} />
   <Countries countries={countries} search = {search}  />
    
   </div>
  );
}

export default App;
