import React from 'react'
import Header from '../components/header/Header'

function LoaderContainer({children}) {
    return (
        <div className='w-full'>
            <Header />
            {children}
        </div>
    )
}

export default LoaderContainer