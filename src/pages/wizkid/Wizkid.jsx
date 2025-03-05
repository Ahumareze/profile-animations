import React from 'react'

function Wizkid() {
    return (
        <div className='h-screen w-full relative bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${'/kanye.jpeg'})`}}>
            <div className='w-full h-full absolute top-0 left-0 p-10 md:p-20'>
                <div className='w-full h-full relative'>
                    <div 
                        className='h-[350px] w-[250px] bg-blue-500' 
                    />
                    <div 
                        className='h-[350px] w-[250px] bg-blue-500 absolute bottom-0 right-0' 
                    />
                    <div 
                        className='h-[250px] w-[400px] bg-red-500 absolute bottom-0 left-0' 
                    />
                    <div 
                        className='h-[250px] w-[400px] bg-red-500 absolute top-0 right-0' 
                    />
                </div>
            </div>
            <div className='w-full h-full bg-black/20 absolute top-0 left-0 p-10 md:p-20 z-[99]'>
                <div className='w-full h-full flex items-center justify-center'>
                    <div className='w-[500px] space-y-4'>
                        <h1 className='text-4xl font-bold text-center cursor-pointer text-white/60 hover:text-white duration-300 ease-in-out'>Made In Lagos</h1>
                        <h1 className='text-4xl font-bold text-center cursor-pointer text-white/60 hover:text-white duration-300 ease-in-out'>More Love, Less Ego</h1>
                        <h1 className='text-4xl font-bold text-center cursor-pointer text-white/60 hover:text-white duration-300 ease-in-out'>Morayo</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wizkid