import axios from 'axios'
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD8iPxkwWtqXiGQ7jSB6XATWvdslnU5cZ0",
  authDomain: "mimitos-ecommerce.firebaseapp.com",
  projectId: "mimitos-ecommerce",
  storageBucket: "mimitos-ecommerce.appspot.com",
  messagingSenderId: "862628270568",
  appId: "1:862628270568:web:290876bce8eb3a9009d45d",
  measurementId: "G-YSXBVLSZZ9"
};


// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

export async function getCategories(){
    const querySnapshot = await getDocs(collection(db, "categories"))
    let categories = []
    querySnapshot.forEach((doc) => {
        categories.push({id: doc.id, name: doc.data().name})
    })
    return categories
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
