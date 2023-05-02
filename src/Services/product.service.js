import axios from "axios";
const BASE_URL = "http://192.168.0.100:3000";


export const addProduct = (data) =>{
    console.log(data, `${BASE_URL}/product`)
    return axios.post(`${BASE_URL}/product`, data)
    
}


export const viewProduct = (data) =>{
    console.log(data, `${BASE_URL}/product`)
    return axios.get(`${BASE_URL}/product`)
    
}


export const updateProduct = (data) =>{
    console.log(data, `${BASE_URL}/product`)
    return axios.put(`${BASE_URL}/product/${id}`, {
        category,
        condition,
        priority
    })
    
}




export const deleteProduct = (data) =>{
    console.log(data, `${BASE_URL}/product`)
    return axios.delete(`${BASE_URL}/product/${id}`)
    
}




