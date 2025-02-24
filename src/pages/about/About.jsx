import React, { useEffect, useRef, useState } from 'react'
import Loader from './Loader'
import gsap from 'gsap'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextAnimations from '../../components/texts/SplitTextAnimations';
import PhotosGrid from './photosGrid/PhotosGrid';
import Works from './works/Works';
import AnimatedStrip from './AnimatedStrip';
import ExtraDetails from './ExtraDetails';
import Header from './Header';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const absoluteCardRef = useRef(null);
    const aboutSectionRef = useRef(null);
    const aboutContainerRef = useRef(null);
    const pageTitleRef = useRef(null)

    const [isPageVisible, setIsPageVisible] = useState(false);

    
    useEffect(() => {
        //handle loader animations
        let tl = gsap.timeline({defaults: {ease: "power1.inOut"}});

        tl.to('#about-loader-indicator', {
            width: '100%',
            duration: 4
        }).to(absoluteCardRef.current, {
            width: 150,
            duration: 0.5
        }).to('#about-loader-indicator', {
            height: 150,
            padding: 5
        }, "-=0.2").to('#about-loader-indicator img', {
            scale: 1,
            opacity: 1,
            top: 0
        }, '-=0.25').to('#loader-splitter div', {
            height: 4,
            width: '100%',
            duration: 1.2,
        }, '-=0.7').to('#loader-splitter', {
            height: '100vh',
            backgroundColor: 'transparent',
            duration: 1.5,
            delay: .2
        }).to('#loader-splitter div',{
            opacity: 0,
            duration: .2
        }, '-=1.4').to('#about-loader-container', {
            onComplete: () => {
                handleTextAnimations()
                setIsPageVisible(true)
            }
        }, "-=0.5")

    }, [])

    const handleTextAnimations = () => {
        const pageTitle = pageTitleRef.current

        gsap.to('#page-title', {
            top: 0, 
            duration: 0.7, 
            stagger: {amount: 0.2}
        });

        gsap.to('#about-text', {
            top: 0,
            opacity: 1,
            // duration: 0.7, 
            ease: "power4.out",
            stagger: {amount: 0.45},
            delay: 0.5
        })

        gsap.to('#about-sub-text', {
            opacity: 1,
            duration: 0.3,
            ease: "power4.out",
            delay: 1,
            stagger: {amount: 0.2}
        })
    }

    return (
        <div className='min-h-screen w-full bg-[#ccccff]'>
            <div className='relative w-full'>
                <Header isPageVisible={isPageVisible} />
            </div>
            <div className='h-fit w-[200px] bg-white/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[300] rounded-xl shadow-md' ref={absoluteCardRef} >
                <div className='h-[5px] w-[10px] rounded-2xl bg-white p-0' id='about-loader-indicator'>
                    <div className='h-full w-full bg-[#ddd] rounded-xl overflow-hidden hover:rounded-[50%] duration-300 ease-in-out'>
                        <img
                            class='h-full w-full relative scale-75 top-[50%] opacity-0'
                            alt='logo'
                            src='favicon.jpg'
                        />
                    </div>
                </div>
            </div>
            {!isPageVisible && <Loader />}
            <div className='h-screen w-full bg-[#ccccff] p-5 md:p-10 flex flex-col'>
                <div className='w-full flex-1 flex flex-col justify-center space-y-2'>
                    <div className='flex items-center gap-0 overflow-hidden'>
                        {'ABOUT'.split('').map((string, index) => (
                            <div key={index} className={`text-5xl md:text-9xl font-black relative top-[150px]`} id='page-title' ref={pageTitleRef}>
                                {string}
                            </div>
                        ))}
                    </div>
                    <p className='opacity-0 text-xl' id='about-sub-text'>CREATIVE SOFTWARE DEVELOPER</p>
                </div>
                <div className='w-full flex items-end gap-2'>
                    <div className='flex-1'>
                        <p className='opacity-0 text-lg' id='about-sub-text'>[IN CONSTRUCTION 🚧]</p>
                    </div>
                    <div className='text-lg space-y-1 text-right'>
                        <div className='overflow-hidden'>
                            <p className='opacity-0 relative top-[50px]' id='about-text'>Software Developer with a knack for creating smooth, user-friendly</p>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='opacity-0 relative top-[50px]' id='about-text'>experiences using Javascript frameworks. Whether it’s building clean</p>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='opacity-0 relative top-[50px]' id='about-text'>web interfaces or versatile mobile apps, I’m passionate</p>
                        </div>
                        <div className='overflow-hidden'>
                            <p className='opacity-0 relative top-[50px]' id='about-text'> about building products people enjoy using.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <AnimatedStrip />
            <PhotosGrid />
            <div className=''>
                <Works />
                <ExtraDetails />
            </div>
            <div className='h-screen' />
        </div>
    )
}

export default About