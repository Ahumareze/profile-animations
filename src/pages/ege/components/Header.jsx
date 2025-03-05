import gsap from 'gsap'
import React, { useEffect } from 'react'

function Header({fireAnimations}) {

    useEffect(() => {
        if(!fireAnimations)return

        let tl = gsap.timeline({defaults: {ease: "power1.out"}})

        tl.to('#ege-header-items', {
            bottom: 0,
            opacity: 1,
            stagger: {amount: 0.4}
        })

    }, [fireAnimations])

    return (
        <div className='py-5 w-[100vw] px-[20px] md:px-[50px] fixed top-0 left-0 flex items-center justify-between'>
            <a href='/ege'>
                <h3 className='text-lg text-white font-medium relative bottom-10 opacity-0' id='ege-header-items'>Ege Berkin 👋</h3>
            </a>
            <div className='flex items-center gap-5 md:gap-10'>
                <a href='#' className='text-base text-white/70 relative bottom-10 opacity-0' id='ege-header-items'>Shop</a>
                <a href='#' className='text-base text-white/70 relative bottom-10 opacity-0' id='ege-header-items'>Gallery</a>
                <a href='#' className='text-base text-white/70 relative bottom-10 opacity-0' id='ege-header-items'>Contact</a>
            </div>
        </div>
    )
}

export default Header