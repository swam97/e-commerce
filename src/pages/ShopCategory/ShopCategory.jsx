import React from 'react'
import "./ShopCategory.css"
import Banner from '../../components/Banner/Banner'

const ShopCategory = ({image, title}) => {
  const subtitle = "Shop until you drop!"
  return (
    <div>
      <Banner image={image} title={title} subtitle={subtitle} style={{backgroundColor:"white"}}/>
      </div>
  )
}

export default ShopCategory