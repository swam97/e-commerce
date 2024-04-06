import React from 'react'
import './Header.css';
import { NavLink,Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext'

const Header = () => {

   const {totalItemsInCart} = useCart();
   const showSideBar = () => {
    const element = document.getElementById('sidebar');
        element.style.display = 'flex';
   }
   const hideSideBar = () => {
    const element = document.getElementById('sidebar');
        element.style.display = 'none';
}

   return (
       <nav className="navbar navbar-expand-lg bg-warning">
           <div className="container">
               <a className="navbar-brand">ShopJerr</a>
               <ul id='sidebar' className="sidebar" style={{listStyleType:"none"}}>
                        <li>
                           <button onClick={hideSideBar}style={{backgroundColor:"rgb(252, 195, 33", border:"none", height:"100px"}}><i className="fa fa-close"></i></button>
                       </li>
                       <li className="nav-item">
                           <NavLink className="nav-link active" aria-current="page" to="/e-commerce/">Home</NavLink>
                       </li>
                       <hr/>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/men's clothing">Men's clothing</NavLink>
                       </li>
                       <hr/>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/women's clothing">Women's clothing</NavLink>
                       </li>
                       <hr/>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/jewelery">Jewelery</NavLink>
                       </li>
                       <hr/>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/electronics">Electronics</NavLink>
                       </li>

                   </ul>
               <button onClick={showSideBar} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                       <li className="nav-item">
                           <NavLink className="nav-link active" aria-current="page" to="/e-commerce/">Home</NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/men's clothing">Men's clothing</NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/women's clothing">Women's clothing</NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/jewelery">Jewelery</NavLink>
                       </li>
                       <li className="nav-item">
                           <NavLink className="nav-link" to="/e-commerce/categories/electronics">Electronics</NavLink>
                       </li>

                   </ul>
                   <div className="d-flex">

                       <Link to="/e-commerce/cart"><button className="btn btn-outline-success me-2"><i className="bi bi-cart"></i> ({totalItemsInCart})</button></Link>
                   </div>
               </div>
           </div>
       </nav>
   )
}

export default Header

