import React from 'react'
import Header from '../components/header/Header'
import Loader from './Loader'

function LoaderContainer({children, backdrop}) {
    return (
        <div className='w-full'>
            <Loader backdrop={backdrop} />
            <Header backdrop={backdrop} />
            {children}
        </div>
    )
}

export default LoaderContainer