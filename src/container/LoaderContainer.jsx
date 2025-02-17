import React from 'react'
import Header from '../components/header/Header'

function LoaderContainer({children, backdrop}) {
    return (
        <div className='w-full'>
            <Header backdrop={backdrop} />
            {children}
        </div>
    )
}

export default LoaderContainer