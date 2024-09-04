import Layout from '../../compones/Layout'
import OrdersCard from '../../compones/myOrderCards'
import { useContext } from 'react'
import { ShoppingCartContex } from '../../Contex'
import { Link } from 'react-router-dom'


const MyOrders = () =>{
    const context = useContext(ShoppingCartContex)
    return (
        <>
        <Layout>
            <div className='flex items-center w-80 justify-center relative'>
            <h1>MyOrders</h1>
            </div>
            
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                    <OrdersCard
                    totalPrice={order.totalPrice}
                    totalProducts={order.totalProducts}
                    />
                    </Link>
                ))
            }

        </Layout>
    </>
    )
}

export default MyOrders