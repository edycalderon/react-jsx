import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NorFound from '../NorFound'
import Signin from '../Signin'
import Navbar from '../../compones/Navbar'
import { ShoppingCartProvider } from '../../Contex'
import CheckoutSideMenu from '../../compones/CheckoutSideMenu'


const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/clothes",
      element: <Home />
    },
    {
      path: "/electronics",
      element: <Home />
    },
    {
      path: "/furniture",
      element: <Home />
    },
    {
      path: "/toys",
      element: <Home />
    },
    {
      path: "/others",
      element: <Home />
    },
    {
      path: "/my-Account",
      element: <MyAccount />
    },
    {
      path: "/my-Order",
      element: <MyOrder />
    },
    {
      path: "/My-Orders",
      element: <MyOrders />
    },
    {
      path: "/sign-in",
      element: <Signin />
    },
    {
      path: "/my-orders/last",
      element: <MyOrder />
    },
    {
      path: "/my-orders/:id",
      element: <MyOrder />
    },
    {
      path: "*",
      element: <NorFound />
    },

  ])
  return routes
}

const App = () => {

  return (
    <>
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
    </>
  )
}
export default App
