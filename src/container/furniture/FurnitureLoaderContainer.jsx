import React from 'react'
import Header from '../../components/header/Header'
import Loader from './Loader'

function FurnitureLoaderContainer({children}) {
    return (
        <div className='w-full'>
            {/* <Header backdrop={'bg-red-500'} /> */}
            <Loader />
            {children}
        </div>
    )
}

export default FurnitureLoaderContainer