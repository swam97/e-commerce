import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
   // Object desctructuring
   const { title, image, description, price, id } = item;
   return (
       <Link to={`/e-commerce/products/${id}`}>
           <div className="card">
               <div className="card-body" style={{display:"flex", flexDirection:"column"}}>
                   <img src={image} alt={description} className='img-fluid' />
                   <h5 className="card-title">{title}</h5>
                   <h6 className="card-subtitle mb-2 text-body-secondary">USD {price}</h6>

               </div>
           </div>
       </Link>
   )
}

export default Card

