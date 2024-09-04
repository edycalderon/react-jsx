import Layout from '../../compones/Layout'
import { ShoppingCartContex } from '../../Contex'
import { useContext,  } from 'react'
import OrderCard from '../../compones/OrderCard'
import { Link } from 'react-router-dom'

import { ChevronLeftIcon } from '@heroicons/react/24/solid'
const MyOrder = () => {
    const { order, } = useContext(ShoppingCartContex)
    const currentPats = window.location.pathname
    let index = currentPats.substring(currentPats.lastIndexOf('/') + 1)
    if (index === 'Last') index = order?.length - 1
    console.log(index)
    return (
        <>
            <Layout>

                <div className='flex items-center justify-center relative w-80 mb-6'>
                    <Link to={`/my-orders`} className='absolute left-0'>
                        <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' /> 
                                            
                    </Link>
                    <h1>MyOrder</h1>
                </div>
                <div className='flex flex-col w-80'>
                    {
                        order?.[index]?.products.map(product => (
                            <OrderCard
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.images}
                                price={product.price}

                            />
                        ))
                    }
                </div>
            </Layout>
        </>
    )
}

export default MyOrder