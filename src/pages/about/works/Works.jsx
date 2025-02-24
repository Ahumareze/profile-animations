import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import WorkListing from './WorkListing';

function Works() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const tl = gsap.timeline({defaults: {ease: "power1.inOut"}});

        tl.to('#black-circle', {
            height: '500vh',
            width: '500vh',
            scrollTrigger: {
                trigger: container,
                start: '10% 70%',
                end: '25% 40%',
                scrub: true,
                // markers: true
            }
        })

    }, [])

    return (
        <div className='min-h-screen w-full'>
            <div className='h-[85vh] w-full relative overflow-hidden' ref={containerRef}>
                <img
                    className='h-[150px] absolute top-[20vh] left-[50px] z-[50]'
                    src='/yellow-coin.svg'
                    alt='yellow-coin'
                />
                <div 
                    className='h-[0px] w-[0px] bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[49]' 
                    id='black-circle'
                />
                <img
                    className='h-[200px] absolute top-[40vh] right-[50px] z-[50]'
                    src='/rpg-game.png'
                    alt='secure'
                />
                <h1 className='font-black text-5xl md:text-6xl text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51]'>4+ Years of building Interractive & scalable softwares</h1>
            </div>
            <WorkListing />
        </div>
    )
}

export default Works