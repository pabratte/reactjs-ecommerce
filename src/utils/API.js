import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"


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

const categories = []

export async function getCategories(){
    if(categories.length === 0){
        const querySnapshot = await getDocs(collection(db, "categories"))
        querySnapshot.forEach((doc) => {
            categories.push({id: doc.id, name: capitalize(doc.data().name)})
        })
    }
    return categories
}

function capitalize(string){
    return string[0].toUpperCase() + string.substring(1)
}

function getCategoryName(categoryId){
    let cat = categories.filter((cat) => cat.id === categoryId)[0]
    return cat?capitalize(cat.name):''
}

export async function getItemsByCategory(categoryId){
    const itemsRef = collection(db, "items")
    const q = query(itemsRef, where("category", "==", parseInt(categoryId)))
    const querySnapshot = await getDocs(q)
    let items = []
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        items.push(
            {
                id: doc.id,
                title: data.title,
                description: data.description,
                price: data.price,
                thumbnail: data.thumbnail
            }
        )
    })
    return {title: getCategoryName(categoryId), items: items}
}

export async function getItem(itemId){
    const docRef = doc(db, "items", itemId)
    const docSnap = await getDoc(docRef)
    console.log("Here")
    if (docSnap.exists()) {
        const data = docSnap.data()
        console.log(data)
        return {
            id: itemId,
            title: data.title,
            description: data.description,
            price: data.price,
            thumbnail: data.thumbnail
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

export async function saveOrder(user, items){
    const newOrder = {
        buyer: user,
        items: items.map(item => {return {id: item.item.id, title: item.item.title, price: item.item.price, quantity: item.quantity}}),
        total: items.reduce((accumulator, item) => accumulator + parseInt(item.item.price)*parseInt(item.quantity), 0),
        date: new Date()
    }
    console.log(newOrder)
    const docRef = await addDoc(collection(db, "orders"), newOrder);
    return docRef.id
}



export async function getOrder(orderId){
    const docRef = doc(db, "orders", orderId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        const data = docSnap.data()
        return data
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}