import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
 import { Link } from 'react-router-dom'
import { ShoppingCartContex } from '../../Contex'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
    const { cartProducts, setCartProducts, isCheckoutSideMenuOpen, closeCheckoutSideMenu, setOrder, order, setCount, 
    count, setSearcheBiteTitle
    } = useContext(ShoppingCartContex)

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id != id)
        setCartProducts(filteredProducts)
        setCount(count - 1)
    }
    const handleCheckout = () => {
        const ordeToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
            
        }
        setOrder([...order, ordeToAdd])
        setCartProducts([])
        setCount(0)
        setSearcheBiteTitle()
        closeCheckoutSideMenu()
    }


    return (
        <aside
            className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    
                    <XMarkIcon
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={() => closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll '>
                {
                    cartProducts.map(product => (
                        <OrderCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='px-6  flex-1'>
                <p className='flex justify-between items-center'> 
                    <span className='font-light'>Total</span> 
                    <span className='font-medium text-2lx'>${totalPrice(cartProducts)}</span> 
                </p>
                <Link to='/my-orders/Last'>
                <button className='bg-black  py-3 text-white w-full rounded-lg ' onClick={() => handleCheckout()}>checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckoutSideMenu