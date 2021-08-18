import axios from 'axios';


export function getCategories(){
    return axios.get('https://api.mercadolibre.com/sites/MLA/categories')
        .then(response => {
            return response.data
        })
}

export function getItems(categoryId){
    return axios.get(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`)
        .then(response => {
            return response.data.results
        })
}

export function getItem(itemId){
    return axios.get(`https://api.mercadolibre.com/items?ids=${itemId}`)
        .then(response => {
            return response.data[0].body
        })
}