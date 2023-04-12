import React from "react";
import { useState } from "react";
 const Countries = ({countries,search}) => {
   const [showCountry, setShowCountry] = useState(null);
    const filtered = countries.filter(country => country.name.common.toLowerCase().includes(search))
 if(filtered.length > 10){
    return <div>Too many matches, specify more</div> 
    
}else if (filtered.length === 1){
   const country = filtered[0]
    return filtered.map(country =>
        <div key ={country.name.common} >
           <h1>{country.name.common} </h1> 
            <div>capital {country.capital} </div>
           <div>area {country.area}</div> 
           <h4>languages:  <ul>
      {Object.values(country.languages).map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul></h4>
    <img src = {country.flag} alt={country.name.common}/>
            </div>)
 }
 else if(filtered.length <= 10 ){
    return filtered.map(country => (
    <div key ={country.name.common} >
      {country.name.common}
    <button onClick={()=> setShowCountry(country)} > show</button>
    {showCountry === country && (
    <div> capital {country.capital} 
           <div>area {country.area}</div> 
           <h4>languages:  <ul>
      {Object.values(country.languages).map((language, index) => (
        <li key={index}>{language}</li>
      ))}
    </ul></h4>
    <img src = {country.flag} alt={country.name.common}/>
    </div>
    )}
    </div>
    
    ))
    
}
 
    return(
        <div>
        
         {filtered.map(country => <div key ={country.name.common} >{country.name.common}</div>
          )}
        </div>
    )
 }
 export default Countries