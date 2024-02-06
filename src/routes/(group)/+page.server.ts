import {getHomePage} from '$lib/services.js'
import {fail, redirect} from '@sveltejs/kit'
export const load=async ()=>{
    console.log('home page run')
    return {
        contents:await getHomePage()
    }
}
export const actions=({
    async search({request}){
        const data=await request.formData()
        const query =data.get('q')
        if(!query){
            return fail(400, {
                error: "You had empty search"
            })
        }
        throw redirect(301, `/result?q=${query}`)
    }
})