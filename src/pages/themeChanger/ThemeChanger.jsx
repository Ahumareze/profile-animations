import React, { useState } from 'react'
import Backdrop from './Backdrop'
import ToggleButton from './ToggleButton';

function ThemeChanger() {
    const [activeTheme, setActiveTheme] = useState("");

    const handleThemeSelect = (theme) => {
        setActiveTheme(theme)
    }


    return (
        <div className='h-screen w-full relative'>
            <Backdrop activeTheme={activeTheme} />
            <div className='h-full w-full absolute top-0 left-0 p-[30px]'>
                <div className='w-full h-full flex items-center justify-center gap-20'>
                    {[0,1,2].map((_, index) => (
                        <div 
                            className='h-fit w-[300px] bg-white rounded-2xl p-[10px] shadow-xl group' 
                            key={index}
                        >
                            <div className='h-[40px] w-full bg-white group-hover:bg-[#eee] rounded-xl group-hover:h-[140px] duration-200 ease-in-out flex justify-end'>
                                <div className='h-full w-[90px] group-hover:w-full duration-300 ease-in-out grid grid-cols-2 gap-[10px]'>
                                    <img 
                                        src='music/morayo.jpeg'
                                        alt='morayo'
                                        className='h-full w-full rounded-xl border-2 border-white relative right-[-30px] rotate-[20deg] group-hover:right-0 group-hover:rotate-0 duration-200 ease-in-out'
                                    />
                                    <img 
                                        src='music/heis.jpeg'
                                        alt='morayo'
                                        className='h-full w-full rounded-xl border-2 border-white'
                                    />
                                </div>
                            </div>
                            <h1 className='font-semibold text-xl mt-5'>Mountains of Debris</h1>
                            <p className='text-black/70 mt-1'>Checking the network cables, modem and router</p>
                            <div className={`h-[40px] w-full rounded-xl text-white flex items-center justify-center mt-10 ${activeTheme === "blue" && "bg-blue-600"} bg-red-500 duration-300 ease-in-out cursor-pointer`}>
                                <p>Explore</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* controls */}
            <ToggleButton handleThemeSelect={handleThemeSelect} />
        </div>
    )
}

export default ThemeChanger