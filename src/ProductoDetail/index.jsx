import './style.css'
import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContex } from '../Contex'
const ProductoDetail = () => {
    const { closeProductDetail, productToShow, isProductDetailOpen } = useContext(ShoppingCartContex)
    return (
        <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} pruducto-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className=' font-medium text-xl '>detail</h2>
                <div><XMarkIcon className="size-6 text-blue-500" onClick={() => closeProductDetail()} /></div>
            </div>

            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                    src={productToShow.images}
                    alt={productToShow.title} />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${productToShow.price}</span>
                <span className='font-medium text-md'>${productToShow.title}</span>
                <span className='font-light text-sm'>${productToShow.description}</span>
            </p>
        </aside>
    )
}
export default ProductoDetail