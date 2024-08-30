import './style.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
const ProductoDetail = () =>{
    return(
        <aside className="pruducto-detail flex flex-col fixed top-0 right-0 border border-black bg-white">
        <div className='flex justify-between items-center p-6'>
            <h2 className='font-medium text-xl'>detail</h2>
            <div><XMarkIcon className="size-6 text-blue-500"/></div>
        </div>
        </aside>
    )
}
export default ProductoDetail