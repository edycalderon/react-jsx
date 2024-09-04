
import Card from '../../compones/Card'
import Layout from '../../compones/Layout'
import ProductoDetail from '../../ProductoDetail'
import { useContext } from 'react'
import { ShoppingCartContex } from '../../Contex'
//import {  MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import '../Home/styleHome.css'


const Home = () => {
    const context = useContext(ShoppingCartContex)

    const renderView = () => {
        // if (context.setSearcheBiteTitle?.length > 0) {
        //     if (context.filterItem?.length > 0) {
        //         return (
        //             context.filterItem?.map((item) => (
        //                 <Card key={item.id} data={item} />
        //             ))
        //         )
        //     }else{
        //         return(
        //             <div>
        //                 No Se Encontraron Coincidencias
        //             </div>
        //         )
        //     }
        // }else{
        //     return(
        //         context.items?.map((item) => (
        //             <Card key={item.id} data={item}/>
        //         ))
        //     )
        // }
    


        if (context.filterItem?.length > 0) {
            return (
                context.filterItem?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            )
        } else {
            return (
                <div>
                    No Se Encontraron Coincidencias
                </div>
            )
        }
    }

    return (
        <>
            <Layout>
                Home
                <div className='flex items-center justify-center relative w-80 mb-4'>
                    <h1 className='font-medium text-xl '> Exclusive Products</h1>
                </div>

                <input
                    type='text'
                    placeholder='Buscar'

                    className=' mb-6  input'
                    onChange={(event) => context.setSearcheBiteTitle(event.target.value)}></input>


                <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                    {
                        renderView()
                    }
                </div>
                <ProductoDetail />
            </Layout>
        </>
    )
}

export default Home