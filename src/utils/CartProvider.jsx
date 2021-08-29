import React, { useState } from "react"

export const CartContext = React.createContext()

export default function CartProvider ({children}) {
    const [items, setItems] = useState([]);

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            updateItem(item.id, quantity)
        }else{
            const newItems = [...items, 
                {
                    item: item,
                    quantity: quantity
                }
            ]
            setItems(newItems);
        }
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

    const getItem = (itemId) => {
        let foundItem = undefined
        items.forEach(item => {
            if (item.item.id === itemId) {
                foundItem = item
            }
        })
        return foundItem
    }

    const updateItem = (itemId, quantity) => {
        items.forEach((cartItem, index) => {
            if(cartItem.item.id === itemId) {
                items[index].quantity = quantity;
            }
        })
        setItems(items)
    }

    const getTotalItems = () => {
        let totalItems = 0
        items.forEach((cartItem, index) => {
            totalItems += cartItem.quantity
        })
        return totalItems
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
            <CartContext.Provider value={{items: items, addItem: addItem, removeItem: removeItem, getItem: getItem, clear: clear, isEmpty: isEmpty, getTotalPrice: getTotalPrice, getTotalItems: getTotalItems}}>
                {children}
            </CartContext.Provider>
        </>
    )
}