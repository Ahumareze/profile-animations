import React from 'react'

function Loader() {
    return (
        <div className='h-screen w-full z-[99] fixed top-0 left-0 flex flex-col' id='about-loader-container'>
            <div className='flex-1 w-full bg-black' />
            <div className='h-0 w-full bg-black flex items-center justify-center' id='loader-splitter'>
                <div className='h-0 w-[10px] bg-white/30 rounded-xl relative' />
            </div>
            <div className='flex-1 w-full bg-black' />
        </div>
    )
}

export default Loader