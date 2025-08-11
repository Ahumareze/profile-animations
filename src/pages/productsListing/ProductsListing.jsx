import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../constants/products'
import Header from './Header'



function ProductsListing() {
    return (
        <div className='min-h-screen w-full'>
            <Header />
            <div className='px-[50px] mt-20 grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 pt-20'>
                {products.map(({
                    img,
                    name,
                    amount
                }, index) => (
                    <ProductCard
                        img={img}
                        name={name}
                        amount={amount}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsListing