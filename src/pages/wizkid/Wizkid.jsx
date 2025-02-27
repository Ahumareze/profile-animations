import React from 'react'

function Wizkid() {
    return (
        <div className='h-screen w-full bg-green-500 relative'>
            <div className='w-full h-full bg-red-500 absolute top-0 left-0 p-10 md:p-20'>
                <div className='w-full h-full border border-white grid grid-row-10 grid-col-10'>
                    <div className='h-full w-full bg-blue-500' />
                </div>
            </div>
            {/* <div className='w-full h-full bg-black/70 absolute top-0 left-0'>
                <div className='w-full h-full bg-red-500'>

                </div>
            </div> */}
        </div>
    )
}

export default Wizkid