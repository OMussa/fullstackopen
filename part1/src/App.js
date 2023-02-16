import { useState } from 'react'


const Button = (props)=>{
  return(
<button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) =>{
  return(
    <table>
      <tbody>
      <tr>
<td>{props.text} {props.value}</td>
</tr>
</tbody>
</table>
  )
}

const Statistics = (props) =>{
  const { good, neutral, bad } = props;
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? `${(good / all) * 100}% ` : 0;
  if (all === 0) {
    return (
      <div>
        <h1>no feedback given</h1>
      </div>
    )
    console.log(all)
  }
 
  return (
    <div>
      
   <h1>Statistics</h1>
      
      <StatisticLine text = 'good' value = {good} />
      <StatisticLine text = 'neutral' value = {neutral} />
      <StatisticLine text = 'bad' value = {bad} />
      <StatisticLine text = 'all' value = {all} />
      <StatisticLine text = 'average' value = {average} />
      <StatisticLine text = 'positive' value = {positive} />
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleGood =() =>{
    setGood(good+1)
  }
  const handleNeutral =() =>{
    setNeutral(neutral+1)
  }
  const handleBad =() =>{
    setBad(bad+1)
    
  }
 

 
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick= {handleGood} text = "good"/>
      <Button handleClick= {handleNeutral} text = "neutral"/>
      <Button handleClick= {handleBad} text = "bad"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} all />
      
    </div>
  )
  
}


export default App