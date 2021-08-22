import React, { useState } from "react"

export const CartContext = React.createContext()

export default function CartProvider ({children}) {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        const newItems = [...items, item];
        setItems(newItems);
    }

    const removeItem = (itemId) => {
        const items = items.filter(item => item.id !== itemId);
        setItems(items);
    }

    const clear = () => {
        setItems([]);
    }

    return (
        <> 
            <CartContext.Provider value={{items: items, addItem: addItem, removeItem: removeItem, clear: clear}}>
                {children}
            </CartContext.Provider>
        </>
    )
}