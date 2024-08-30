import { createContext, useState } from "react";

export const ShoppingCartContex = createContext();

export const ShoppingCartProvider = ({ children }) => {
    const [count, setcount] = useState(0)
    return (
        <ShoppingCartContex.Provider value={{
            count,
            setcount
        }}>
            {children}
        </ShoppingCartContex.Provider>
    )
}