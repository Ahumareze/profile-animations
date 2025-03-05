import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'

function HeroTextsAnimations({startAnimations}) {
    const containerRef = useRef(null)

    useEffect(() => {
        if(!startAnimations)return

        const container = containerRef.current

        let tl = gsap.timeline({defaults: {ease: "power1.out"}})

        tl.to(container, {
            height: 'auto',
            // delay: 1.7,
            duration: 0.6
        })

        tl.to('#ege-paragraph-item', {
            top: 0,
            opacity: 1,
            stagger: {amount: 0.15},
        }, "-=0.4")


    }, [startAnimations])

    return (
        <div className='h-0 max-w-[700px] overflow-hidden text-xl font-medium text-white/90 text-center space-y-2 mt-5' ref={containerRef}>
            <p className='relative top-10 opacity-0' id='ege-paragraph-item'>Art Director crafting stunning, AI-powered visuals</p>
            <p className='relative top-10 opacity-0' id='ege-paragraph-item'> with purpose and creativity.</p>
            <div className='pt-5'>
                <div 
                    className='text-orange-primary flex items-center text-base gap-2 py-2 px-5 rounded-full mx-auto w-fit cursor-pointer bg-transparent hover:bg-white/10 hover:gap-5 duration-300 ease-in-out relative top-10 opacity-0' 
                    id='ege-paragraph-item'
                >
                    <p>Shop Now</p>
                    <FiArrowRight />
                </div>
            </div>
        </div>
    )
}

export default HeroTextsAnimations