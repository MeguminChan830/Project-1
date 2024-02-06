import {getSearch} from '$lib/services.js'
export const load=async({url})=>{
    const query =(url.searchParams.get('q')||'').replace(/\s+/g, '')
    console.log('url Here:', url)
    const filters=url.searchParams.get('filters')||''
    return {
        contents:await getSearch({query, filters})
    }
}