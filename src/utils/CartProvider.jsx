import React, { useState } from "react"

export const CartContext = React.createContext()

export default function CartProvider ({children}) {
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
        const newItem = {
            id: item.id,
            title: item.title,
            quantity: quantity,
            price: item.price,
            thumbnail: item.thumbnail
        }
        const newItems = [...items, newItem];
        setItems(newItems);
    }

    const removeItem = (itemId) => {
        const items = items.filter(item => item.item.id !== itemId);
        setItems(items);
    }

    const clear = () => {
        setItems([]);
    }

    const isEmpty = () => {
        return items.length === 0;
    }

    const getTotalPrice = () => {
        return items.reduce((accumulator, item) => accumulator + parseInt(item.price)*parseInt(item.quantity), 0)
    }

    return (
        <> 
            <CartContext.Provider value={{items: items, addItem: addItem, removeItem: removeItem, clear: clear, isEmpty: isEmpty, getTotalPrice: getTotalPrice}}>
                {children}
            </CartContext.Provider>
        </>
    )
}