import axios from "axios";
const BASE_URL = "http://10.10.245.211:3000";

export const addUser = (data) =>{
    console.log(data, `${BASE_URL}/user`)
    return axios.post(`${BASE_URL}/user`, data)
    
}

