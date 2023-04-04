import ReactDOM from 'react-dom/client'
import axios from 'axios'
import './index.css'
import App from './App'

axios.get('http://localhost:3001/persons').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
}) 
// makes a request to that url if the response is successful it assigns the data to notes 
//Finally it uses the ReactDOM.createRoot method to create a new root for the React app then selects the element with an ID of root and renders the App component with the notes data passed as a prop.