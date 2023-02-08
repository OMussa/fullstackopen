import { useState } from 'react'

const Statistics = (props) =>{
  return(
<div>
      <p>all {props.all} </p>
      <p>average {props.average} </p>
      <p>positive {props.positive}</p>
  </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good+neutral+bad
  const average = (good+neutral+bad)/3
  const positive = `${(good/all)*100} %`

 
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics 
      all = {good+neutral+bad}
      average = {(good+neutral+bad)/3}
      positive = {`${(good/all)*100} %`}
      
      />
      
    </div>
  )
}

export default App