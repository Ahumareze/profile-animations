import React from 'react'

function PhotoContainer({photo, handleHover}) {
    return (
        <div className='h-full w-full  bg-[#ccccff] overflow-hidden relative' onMouseEnter={handleHover}>
            <div className='h-full w-full flex flex-col group'>
                <div className='w-full flex-1 overflow-hidden relative'>
                    <img
                        className='w-full h-full object-cover'
                        alt=''
                        src={photo}
                    />
                    <div className='absolute top-0 left-0 h-full w-full bg-black/20 group-hover:bg-transparent duration-300 ease-in-out' />
                </div>
            </div>
            <div className='absolute top-0 left-0 h-full w-full  bg-[#ccccff]' id='photo-grid-cover' />
        </div>
    )
}

export default PhotoContainer