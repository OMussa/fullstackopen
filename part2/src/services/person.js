import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = () =>{
    return axios.get(baseUrl)
} 
//this sends a GET request to baseUrl allowing us to retrieve data 

const create = newObject => {
    return axios.post(baseUrl, newObject)
  }
//this sends a POST request to baseUrl allowing us to add new data which would be newObject and in the app component it would be nameObject
const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
  }
  //this sends a delete request to baseUrl allowing us to delete data which would be a specified id
  const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
  }
//this sends a PUT request to baseUrl allowing us to update existing data which would be a specified id and being updated with newObject and in the app component it would be updatedPerson
export default {getAll,create,remove, update}