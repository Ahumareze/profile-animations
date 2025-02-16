import React, { useRef } from 'react'
import LoaderContainer from '../../container/LoaderContainer'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrinkItem from './DrinkItem';
gsap.registerPlugin(ScrollTrigger);

function Drinks() {
    const containerRef = useRef(null)

    useGSAP(() => {
        let tl1 = gsap.timeline();

        tl1.to('#listing-container', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom 10%',
                markers: true,
                scrub: true,
                pin: true
            },
            x: '-100%',
        })

        // Cleanup the ScrollTrigger when component is unmounted
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

    }, {scope: containerRef})

    const handleEnlarge = (id) => {
        let tl1 = gsap.timeline();

        tl1.to(`${id} `, {
            height: '100vh',
            maxWidth: '100vw',
            position: 'fixed', 
            top: 0,
            right: 0,
            backgroundColor: '#ff0000',
            zIndex: 10001
        })
    }

    return (
        <LoaderContainer>
            <div className='w-full bg-[#faeade]'>
                <div className='h-[100vh] w-full' ref={containerRef}>
                    <div className='h-[100vh] w-full flex items-center gap-10 px-10 relative' id='listing-container'>
                        {/* <div className='h-[400px] min-w-[500px] max-w-[500px]'>
                            <h1 className='text-4xl font-bold'>Explore 3 Unique Flavours</h1>
                        </div> */}
                        <DrinkItem
                            image={'/spylt-max-choco.webp'}
                            title={'Chocolate Milk'}
                            index={1}
                            bg={'bg-[#bd7c57]'}
                            pieces={'/split-choco-bars.webp'}
                        />
                        <DrinkItem
                            image={'/split-strawberry.webp'}
                            title={'Chocolate Milk'}
                            index={2}
                            bg={'bg-[#c03e47]'}
                            pieces={'/split-berries.webp'}
                        />
                        <DrinkItem
                            image={'/split-milkshake.webp'}
                            title={'Chocolate Milk'}
                            index={3}
                            pieces={'/split-wafers.webp'}
                            bg={'bg-[#d8c5a4]'}
                        />
                        <DrinkItem
                            image={'/split-choco.webp'}
                            title={'Chocolate Milk'}
                            index={3}
                            bg={'bg-[#3e3c3a]'}
                            pieces={'/split-choco-bars.webp'}
                        />
                    </div>
                </div>
                <div className='h-screen w-full bg-[#7f3b2d]'>

                </div>
                <div>
                    
                </div>
            </div>
        </LoaderContainer>
    )
}

export default Drinks