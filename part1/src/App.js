import { useState } from 'react'
const Button = (props) =>{
  return(
<button onClick={props.handleClick}>{props.text}</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  /*state variable called votes that is initially an array of zeroes with the same length as the anecdotes array. 
  We can than use the votes variable to keep track of the number of votes for each anecdote,
   and we can use the setVotes function to update the votes variable when a user clicks the "vote" button. */
  const [votes,setVotes] = useState(new Array(anecdotes.length).fill(0))

const handleAnec = () =>{
  setSelected(Math.floor(Math.random() * anecdotes.length)) }

  
const handleVote = () =>{
  const newVote = [...votes]
  newVote[selected] +=1
  setVotes(newVote)
  console.log(newVote)
}

  
  
//votes.indexOf(Math.max(...votes)): This finds the index of the maximum value in the votes array.
  const max = votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button handleClick = {handleVote}  text = 'vote' />
      <Button handleClick = {handleAnec}  text = 'next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[max]}
      <p>has {votes[max]} votes</p>
    </div>
  )
}


export default App