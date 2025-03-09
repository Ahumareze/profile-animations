import gsap from 'gsap'
import React, { useEffect } from 'react'

function Backdrop({children, isDarkMode}) {

    useEffect(() => {
        if(isDarkMode){
            handleDarkThemeToggle()
        }else{
            handlelightThemeToggle()
        }
    }, [isDarkMode])

    const handleDarkThemeToggle = () => {
        const tl = gsap.timeline({defaults: {ease: "power1.inOut"}});

        tl.to('#rounded-backdrop', {
            top: 0,
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
            delay: 0.1,
            duration: 0.5
        })
    };

    const handlelightThemeToggle = () => {
        const tl = gsap.timeline({defaults: {ease: "power1.inOut"}});

        tl.to('#rounded-backdrop', {
            top: 15,
            height: 60,
            width: 500,
            borderRadius: 40
        })
    }

    return (
        <div className='min-h-screen w-full relative'>
            <div className='absolute top-0 left-0 h-screen w-full'>
                <div className='h-full w-full relative bg-white'>
                    <div 
                        className='absolute top-[15px] left-1/2 -translate-x-1/2 w-[500px] h-[60px] bg-black rounded-full flex items-center justify-end' 
                        id='rounded-backdrop' 
                    />
                </div>
            </div>
            <div className='h-full w-full top-0 left-0 absolute'>
                {children}
            </div>
        </div>
    )
}

export default Backdrop