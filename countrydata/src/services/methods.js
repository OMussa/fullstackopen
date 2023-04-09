import axios from "axios";
const baseUrl = 'https://restcountries.com/v3.1/all'

const getAll = () =>{
    return axios.get(baseUrl)
} 

//this sends a PUT request to baseUrl allowing us to update existing data which would be a specified id and being updated with newObject and in the app component it would be updatedPerson
export default {getAll}