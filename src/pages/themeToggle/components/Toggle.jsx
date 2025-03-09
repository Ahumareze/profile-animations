import React from 'react'

function Toggle({handleClick}) {
    return (
        <div className='h-full w-[100px] rounded-full bg-orange-500 cursor-pointer' onClick={handleClick}>

        </div>
    )
}

export default Toggle