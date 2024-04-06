import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import Card from '../Card/Card';


const Featured = () => {
   const url = "https://fakestoreapi.com/products?limit=6";

   const { data, loading, error } = useFetch(url);

   return (
       <div className='container'>
           {
               error ?
                   <p>Something is wrong</p>
                   : loading
                       ? <p>Loading...</p>
                       :
                       <div className='row g-3'>
                           {
                               data?.map((val) => <div className='col-md-4 col-6' key={val.id}><Card item={val}/></div>)
                           }
                       </div>

           }
       </div>
   )
}


export default Featured

