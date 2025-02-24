import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight } from 'react-icons/fi';
gsap.registerPlugin(ScrollTrigger);

function WorkListing() {
    const containerRef = useRef(null);
    const listingContainerRef = useRef(null);

    useGSAP(() => {
        let tl1 = gsap.timeline();

        tl1.to(listingContainerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom 10%',
                // markers: true,
                scrub: true,
                pin: true
            },
            x: '-60%',
        })

        // Cleanup the ScrollTrigger when component is unmounted
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

    }, {scope: containerRef})

    return (
        <div className='w-[100vw] h-fit bg-black overflow-x-hidden' ref={containerRef}>
            <div className='h-screen w-fit flex items-center p-10 py-20 gap-10' ref={listingContainerRef}>
                <div className='h-full min-w-[600px] max-w-[600px] bg-white/10 p-5 rounded-xl overflow-hidden flex items-center'>
                    <img
                        className='w-full object-cover rounded-lg'
                        alt=''
                        src='/projects/uzoamaka-portfolio.png'
                    />
                </div>
                <div className='h-full min-w-[600px] max-w-[600px] bg-white/10 p-5 rounded-xl overflow-hidden flex items-center'>
                    <img
                        className='w-full object-cover rounded-lg'
                        alt=''
                        src='/projects/gigmile_website.jpg'
                    />
                </div>
                <div className='h-full min-w-[600px] max-w-[600px] bg-white/10 p-5 rounded-xl overflow-hidden flex items-center'>
                    <img
                        className='w-full object-cover rounded-lg'
                        alt=''
                        src='/projects/joshuagavu.png'
                    />
                </div>
                <div className='h-full min-w-[600px] max-w-[600px] bg-white/10 p-5 rounded-xl overflow-hidden flex items-center'>
                    <img
                        className='w-full object-cover rounded-lg'
                        alt=''
                        src='/projects/mobility_dashboard.jpg'
                    />
                </div>
                <div className='h-full min-w-[600px] max-w-[600px] bg-red-500 overflow-hidden rounded-xl bg-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${'/projects/all-projects-backdrop.png'})`}}>
                    <div className='h-full w-full bg-black/70 flex items-center justify-center'>
                        <a href="https://ifeanyicodes.com" target="_blank">
                            <div className="flex items-center gap-2 px-5 py-2 bg-[#fff] hover:bg-[#eee] text-black/80 rounded-full duration-300 ease-in-out group">
                                <p className="font-medium hidden md:flex">View all projects</p>
                                <FiArrowUpRight className='group-hover:rotate-45 duration-300 ease-in-out' />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkListing