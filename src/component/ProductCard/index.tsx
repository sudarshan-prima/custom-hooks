import React, { PropsWithChildren } from 'react'
import './product.css'

type ProductCardProps = {
    title: string,
    brand: string,
    category?: string,
    price: number,
    description: string
}

export const ProductCard: React.FC<PropsWithChildren<ProductCardProps>> = ({title, brand, category, price, description}) => {
  return (
    <div className='product-card'>
        <div className='product-card-top'>
            <div className='product-card-img'>
                <img src="https://i.dummyjson.com/data/products/1/1.jpg" alt="product" />
            </div>
            <div className='product-card-details'>
                <h2>{title}</h2>
                <h3>{brand}</h3>
                <button>{category}</button>
                <p>{price}</p>
            </div>
        </div>
        <div className='product-card-bottom'>
            <p>{description}</p>
        </div>
    </div>
  )
}

