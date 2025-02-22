import React, { useRef } from 'react'
import LoaderContainer from '../../container/loader/LoaderContainer'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrinkItem from './DrinkItem';
import ExtraDetails from './ExtraDetails';
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
                // markers: true,
                scrub: true,
                pin: true
            },
            x: '-115%',
        })

        // Cleanup the ScrollTrigger when component is unmounted
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

    }, {scope: containerRef})

    return (
        <LoaderContainer backdrop={'bg-[#faeade]'}>
            <div className='w-full bg-[#faeade]'>
                <div className='h-[100vh] w-full' ref={containerRef}>
                    <div className='h-[100vh] w-full flex items-center gap-10 md:gap-20 px-10 md:px-20 relative' id='listing-container'>
                        {/* <div className='h-[400px] min-w-[500px] max-w-[500px]'>
                            <h1 className='text-4xl font-bold'>Explore 3 Unique Flavours</h1>
                        </div> */}
                        <DrinkItem
                            image={'/spylt-max-choco.webp'}
                            title={'Chocolate Milk'}
                            index={1}
                            bg={'bg-[#bd7c57]'}
                            pieces={'/split-choco-bars.webp'}
                            style={'rotate-[7deg]'}
                            backgroud={'/choco-backdrop.svg'}
                        />
                        <DrinkItem
                            image={'/split-strawberry.webp'}
                            title={'Strawberry Milk'}
                            index={2}
                            bg={'bg-[#c03e47]'}
                            pieces={'/split-berries.webp'}
                            style={'rotate-[-6deg]'}
                            backgroud={'/strawberry-backdrop.svg'}
                        />
                        <DrinkItem
                            image={'/split-milkshake.webp'}
                            title={'Vanilla Milkshake'}
                            index={3}
                            pieces={'/split-wafers.webp'}
                            bg={'bg-[#d8c5a4]'}
                            style={'rotate-[7deg]'}
                            backgroud={'/vanilla-backdrop.svg'}
                        />
                        <DrinkItem
                            image={'/split-choco.webp'}
                            title={'Max Chocolate Milk'}
                            index={3}
                            bg={'bg-[#3e3c3a]'}
                            pieces={'/split-choco-bars.webp'}
                            style={'rotate-[-7deg]'}
                            backgroud={'/max-choco-backdrop.svg'}
                        />
                    </div>
                </div>
                <ExtraDetails />
            </div>
        </LoaderContainer>
    )
}

export default Drinks