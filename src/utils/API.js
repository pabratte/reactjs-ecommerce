import { db } from "./firebaseConfig"
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"

export async function getCategories(){
    const querySnapshot = await getDocs(collection(db, "categories"))
    let categories = []
    querySnapshot.forEach((doc) => {
        categories.push({id: doc.id, name: doc.data().name})
    })
    return categories
}

export async function getItems(categoryId){
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
    return items
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
