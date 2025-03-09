import React, { useState } from 'react'
import Toggle from './components/Toggle'
import Backdrop from './components/Backdrop';
import DynamicIsland from './components/DynamicIsland';
import { AnimatePresence, motion } from 'motion/react'

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    

    const CardItem = () => {
        return(
            <div 
                className={`w-full rounded-lg p-5 flex gap-5 ${isDarkMode ? 'bg-red-500' : 'bg-green-500'} duration-300 ease-in-out`}
            >
                <div className='w-[200px] h-[300px] bg-[#ddd] rounded-lg' />
                <div className='flex-1'>
                    <h1 className='text-xl font-medium'>Hello world</h1>
                    <p className='mt-2 delay-300'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                </div>
            </div>
        )
    }

    return (
        <Backdrop isDarkMode={isDarkMode} >
            <div>
                <div className="w-full p-10 mt-20">
                    <div className={`text-center delay-300 duration-300 ease-in-out ${isDarkMode ? 'text-white' : 'text-black'}`}>
                        <h1 className='text-4xl font-bold'>Browse Shipping Rates</h1>
                        <p className='text-xl mt-2'>More details about this page</p>
                    </div>
                    <div className='w-full mt-10 grid grid-cols-2 md:grid-cols-3 gsp-5 md:gap-10'>
                        {[1,2,3].map(item => (
                            <div 
                                className={`w-full rounded-lg p-5 flex gap-5 ${isDarkMode ? 'bg-[#1a1a1a] text-white delay-300' : 'bg-[#f5f5f5] text-black delay-100'} duration-300 ease-in-out`}
                                key={item}
                            >
                                <div className='w-[200px] h-[300px] bg-[#ddd] rounded-lg' />
                                <div className='flex-1'>
                                    <h1 className='text-xl font-medium'>Hello world</h1>
                                    <p className='mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <DynamicIsland
                    handleClick={() => setIsDarkMode(prev => !prev)}
                    isDarkMode={isDarkMode}
                />
            </div>
        </Backdrop>
    )
}

export default ThemeToggle