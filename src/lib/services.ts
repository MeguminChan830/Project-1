import {error} from "@sveltejs/kit"
import Axios from 'axios'

const axios= Axios.create({
    baseURL: 'https://youtube138.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_X_RapidAPI_Key,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
    params: {
        hl: 'en',
        gl: 'US'
    }
})

export const getHomePage=async()=>{
    try{
        const result= await axios('home/')
    }catch(e){
        console.log("🚀 Error: ", e)
    }
}
export const getSearch=async({query, filters}:{query:string, filters:string})=>{
    try{
        const result=await axios('search/', {
            params:{
                q: query,
                cursor:filters
            }
        })
        return result.data
    }catch(e){
        console.log("Error: ", e)
    }
}

export const getVideoDetails=async (id:string)=>{
    try{
        const result =await axios('video/details/',{
            params:{
                id
            }
        })
        return result.data
    }catch(e){
        console.log("Error", e)
    }
}

export const getVideoComments=async(id:string)=>{
try{
    const result= await axios('video/comments/', {
        params:{
            id
        }
    })
    return result.data
}catch(e){
    console.log("Error", e)
}
}

export const getRelatedContent=async(id:string)=>{
    try{
        const result=await axios('video/related-contents/', {
            params:{
                id
            }
        })
        return result.data.contents
    }catch(e){
        console.log("Error: ", e)
    }
}
