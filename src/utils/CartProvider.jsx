import React, { useState } from "react"

export const CartContext = React.createContext()

export default function CartProvider ({children}) {
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
        const newItems = [...items, 
            {
                item: item,
                quantity: quantity
            }
        ];
        setItems(newItems);
    }

    const removeItem = (itemId) => {
        const filteredItems = items.filter(item => item.item.id !== itemId);
        setItems(filteredItems);
    }

    const isInCart = (itemId) => {
        let inCart = false
        items.forEach(item => {
            if (item.item.id === itemId) {
                inCart = true
            }
        })
        return inCart
    }

    const clear = () => {
        setItems([]);
    }

    const isEmpty = () => {
        return items.length === 0;
    }

    const getTotalPrice = () => {
        return items.reduce((accumulator, item) => accumulator + parseInt(item.item.price)*parseInt(item.quantity), 0)
    }

    return (
        <> 
            <CartContext.Provider value={{items: items, addItem: addItem, removeItem: removeItem, clear: clear, isEmpty: isEmpty, getTotalPrice: getTotalPrice}}>
                {children}
            </CartContext.Provider>
        </>
    )
}