import axios from "axios";
const BASE_URL = "http://192.168.0.100:3000";

export const addUser = (data) =>{
    console.log(data, `${BASE_URL}/user`)
    return axios.post(`${BASE_URL}/user`, data)
    
}


export const viewUser = (data) =>{
    console.log(data, `${BASE_URL}/user`)
    return axios.get(`${BASE_URL}/user`)
    
}


export const updateUser = (data) =>{
    console.log(data, `${BASE_URL}/user`)
    return axios.put(`${BASE_URL}/user/${id}`, {
        name,
        email,
        phone
    })
    
}


export const deleteUser = (data) =>{
    console.log(data, `${BASE_URL}/user`)
    return axios.delete(`${BASE_URL}/user/${id}`)
    
}




