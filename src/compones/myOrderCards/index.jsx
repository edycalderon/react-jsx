import { CalendarDateRangeIcon } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
const OrdersCard = ({ totalPrice, totalProducts }) => {


    return (
        
        <div className="flex flex-col bg-white rounded-3xl border-solid ">
            <div className="px-5 sm:p-10 ">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>
                        <h2
                            className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
                        >
                            Total Productos:  #{totalProducts}
                        </h2>
                        <p className="mt-2 text-sm text-gray-500">Fecha: 01.02.3.</p>
                    </div>
                    <div className="mt-6">
                        <p>
                            <span className="text-5xl font-light tracking-tight text-black">
                            Precio Total: ${totalPrice}
                            </span>
                            <span className="text-base font-medium text-gray-500"> GT </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex px-6 pb-8 sm:px-8">
                <p
                    aria-describedby="tier-company"
                    className="flex items-center justify-center  h-10 w-10 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    href="#"
                >
                    <ArrowRightIcon/>
                </p>
            </div>
        </div>

    )
}

export default OrdersCard

