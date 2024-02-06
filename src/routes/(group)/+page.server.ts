import {getHomePage} from '$lib/services.js'
import {fail, redirect} from '@sveltejs/kit'
export const load=async ()=>{
    
    return {
        contents:await getHomePage()
        // contents:[],
        // another: console.log('home page run')
    }
}
export const actions=({
    async search({request}){
        console.log("SEARCH HERE: ", request)
        const data=await request.formData()
        console.log("request Here: ", request)
        const query =data.get('q')
        if(!query){
            return fail(400, {
                error: "You had empty search"
            })
        }
        throw redirect(302, `/result?q=${query}`)
    }
})