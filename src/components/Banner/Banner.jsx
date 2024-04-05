import React from 'react';
import './Banner.css';

const Banner = ({ image, title, subtitle }) => {
   return (
       <div className='jumbotron text-center'
           style={{ backgroundImage: `url(${image})`,
           backgroundSize: 'cover', color:"white", outlineColor:"black"}}>
           <h1 className='display-4'>{title}</h1>
           {subtitle && <p className='lead'>{subtitle}</p>}
       </div>
   )
}

export default Banner
