import gsap from 'gsap'
import React, { useEffect } from 'react'

function Header({isPageVisible}) {

    useEffect(() => {

        if(!isPageVisible) return

        gsap.to('#about-header-item', {
            opacity: 1,
            delay: 0.2,
            stagger: {amount: 0.4}
        });

    }, [isPageVisible])

    return (
        <div className='h-fit w-full px-[20px] md:px-[50px] py-3 flex items-center justify-between gsp-5 md:gap-10 absolute top-0 left-0'>
            <a href="/">
                <div className="flex items-center gap-2 opacity-0" id='about-header-item'>
                    <img
                        src="/favicon.jpg"
                        alt=""
                        className="h-[40px] w-[40px] bg-[#f5f5f5] rounded-xl border-2 border-white shadow-md"
                    />
                    <p className="font-medium">Ifeanyi's Playground</p>
                </div>
            </a>
            <div className='flex items-center gap-10'>
                <a href='https://ifeanyicodes.com' target='_blank' className='cursor-pointer text-black/70 opacity-0' id='about-header-item'>[PORTFOLIO]</a>
                <a href='https://github.com/Ahumareze' target='_blank' className='cursor-pointer text-black/70 opacity-0' id='about-header-item'>[GITHUB]</a>
            </div>
        </div>
    )
}

export default Header