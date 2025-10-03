import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'

const ProductCard = () => {
    return (
        <div className='p-2.5 my-5 bg-sky-500 text-white text-xl hover:bg-sky-700 rounded-lg w-60'>
            <AddToCart />
        </div>
    )
}

export default ProductCard