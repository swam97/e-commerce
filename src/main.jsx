import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory/ShopCategory.jsx'
import Product from './pages/Product/Product.jsx'
import Cart from './pages/Cart/Cart.jsx'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'

import banner1 from './assets/banner1.jpg'
import banner2 from './assets/banner2.jpg'
import banner3 from './assets/banner3.jpg'
import { CartProvider } from './context/CartContext.jsx'

const router = createBrowserRouter([
  {
    path:"/e-commerce/",
    element:<App/>,
    children:[
      {
        path:"/e-commerce/",
        element:<Home image={banner1} title="Shopjerr"/>
      },
      {
        path:"/e-commerce/categories/electronics",
        element:<ShopCategory image={banner2} title="Electronics"/>
      },
      {
        path:"/e-commerce/categories/jewelery",
        element:<ShopCategory image={banner3} title="Jewelery"/>
      },
      {
        path:"/e-commerce/categories/men's clothing",
        element:<ShopCategory image={banner1} title="Men's clothing"/>
      },
      {
        path:"/e-commerce/categories/women's clothing",
        element:<ShopCategory image={banner2} title="Women's clothing"/>
      },
      {
        path:"/e-commerce/products/:id",
        element:<Product/>
      },
      {
        path:"/e-commerce/cart",
        element:<Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router}/>
    </CartProvider>
  // </React.StrictMode>,
)