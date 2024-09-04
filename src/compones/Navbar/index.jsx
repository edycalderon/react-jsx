import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContex } from "../../Contex"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'
    const context  = useContext(ShoppingCartContex)
    return(
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-5 text-sm font-light top-0 bg-white">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    Shoppi
                </li>
                <li>
                    
                    <NavLink 
                    onClick={() => context.setSearcheCategori()}
                    to='/' className={({isActive}) => isActive ? activeStyle : undefined}>
                    All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearcheCategori('clothes')}
                    to='/clothes' className={({isActive}) => isActive ? activeStyle : undefined}>
                        clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearcheCategori('electronics')}
                    to='/electronics' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearcheCategori('furniture')}
                    to='/furniture' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearcheCategori('toys')}
                    to='/toys' className={({isActive}) => isActive ? activeStyle : undefined}>
                        toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    onClick={() => context.setSearcheCategori('others')}
                    to='/others' className={({isActive}) => isActive ? activeStyle : undefined}>
                        others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                
                    edy@gmail.com
                    
                </li>
                <li>
                    <NavLink to='/my-Account' className={({isActive}) => isActive ? activeStyle : undefined}>
                    my-Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-Order' className={({isActive}) => isActive ? activeStyle : undefined}>
                    my-Order
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/My-Orders' className={({isActive}) => isActive ? activeStyle : undefined}>
                    My-Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in' className={({isActive}) => isActive ? activeStyle : undefined}>
                    sign-in
                    </NavLink>
                </li>
                <li>
                    <ShoppingCartIcon/> {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar