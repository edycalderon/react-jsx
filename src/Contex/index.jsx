import { createContext, useState, useEffect } from "react";
export const ShoppingCartContex = createContext();


export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Checkout Side Menu · Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)



    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])
    const [order, setOrder] = useState([])
    const [items, setItems] = useState()





    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
            
    }, [])

    const [searcheBiteTitle, setSearcheBiteTitle] = useState(null)
    const [filterItem, setFilterItem] = useState(null)
    const [searcheCategori, setSearcheCategori] = useState(null)


    const filterItemBytile = (items, searcheBiteTitle) => {
        return items?.filter((item) => item.title.toLowerCase().trim().includes(searcheBiteTitle.toLowerCase().trim()))
    }
    const filterItemByCategori = (items, searcheCategori) => {
        return items?.filter((item) => item.category.name.toLowerCase().trim().includes(searcheCategori.toLowerCase().trim()))
    }



    const filterby = (searchetype, items, searcheBiteTitle, searcheCategori) => {
        if (searchetype === 'BY_TITLE') {
            return filterItemBytile(items, searcheBiteTitle)
        }
        if (searchetype === 'BY_CATEGORY') {
            return filterItemByCategori(items, searcheCategori)
        }
        if (searchetype === 'BY_TITLE_AND_CATEGORY') {
            return filterItemByCategori(items, searcheCategori).filter(item => item.title.toLowerCase().trim().includes(searcheBiteTitle.toLowerCase().trim()))
        }
        if (!searchetype) {
            return items
        }
    }

    useEffect(() => {
        if (searcheBiteTitle && searcheCategori) setFilterItem(filterby('BY_TITLE_AND_CATEGORY', items, searcheBiteTitle, searcheCategori))
        if (searcheBiteTitle && !searcheCategori) setFilterItem(filterby('BY_TITLE', items, searcheBiteTitle, searcheCategori))
        if (!searcheBiteTitle && searcheCategori) setFilterItem(filterby('BY_CATEGORY', items, searcheBiteTitle, searcheCategori))
        if (!searcheBiteTitle && !searcheCategori) setFilterItem(filterby(null, items, searcheBiteTitle, searcheCategori))
    }, [items, searcheBiteTitle, searcheCategori])











    return (
        <ShoppingCartContex.Provider value={{
            filterItem,
            setSearcheCategori,
            filterItem,
            searcheBiteTitle,
            setSearcheBiteTitle,
            items, setItems,
            setOrder,
            order,
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContex.Provider>
    )
}