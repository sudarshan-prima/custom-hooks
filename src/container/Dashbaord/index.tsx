import React, { useState } from 'react'

import {ProductCard} from '../../component/ProductCard'
import data from '../../constant/data.json'

export const Dashboard = () => {
    console.log(data)

    const [products, ] = useState(data.products)

  return (
    <>
    {
        products.map((product) => (
            <ProductCard title={product.title} brand={product.brand} category={product.category} price={product.price} description={product.description} />
        ))
    }
        
    </>
  )
}
