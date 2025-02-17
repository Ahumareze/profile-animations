import { useEffect, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExtraDetails(){
    const extraDetailsContainerRef = useRef();
    const textRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;

        if (!textElement) return;

        // Set up the Intersection Observer
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Animate the text when it comes into view
                gsap.fromTo('#splyt-ifeanyi-title',
                { opacity: 0, y: 150 }, // Initial state (hidden)
                { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: {amount: 0.5} } // Final state (visible)
                );

                // Stop observing after the animation runs (optional)
                observer.unobserve(textElement);
            }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        // Start observing the text element
        observer.observe(textElement);

        // Cleanup observer on unmount
        return () => {
        observer.unobserve(textElement);
        };
    }, []);

    // useGSAP(() => {
    //     let tl = gsap.timeline();

    //     tl.to('#splyt-ifeanyi-title', {
    //         scrollTrigger: {
    //             trigger: extraDetailsContainerRef.current,
    //             start: '10% 50%',
    //             end: '50% 50%',
    //             // markers: true,
    //             scrub: true,
    //         },
    //         y: -150,
    //         opacity: 1,
    //         stagger: {
    //             amount: 0.6
    //         }
    //     })
    // }, {scope: extraDetailsContainerRef})

    return(
        <div className='h-screen w-full bg-[#7f3b2d] flex flex-col items-center  px-[20px]' ref={extraDetailsContainerRef}>
            <div className="w-full flex items-center justify-center flex-1">
                <div className="text-[#faeade] text-center" ref={textRef}>
                    <div className='flex items-center justify-center gap-0 h-fit overflow-hidden'>
                        {'IFEANYI'.split('').map((string, index) => (
                            <div key={index} className='text-5xl md:text-7xl font-bold relative opacity-0' id={'splyt-ifeanyi-title'}>
                                {string}
                            </div>
                        ))}
                        <div className='w-[30px]' />
                        {'AHUMAREZE'.split('').map((string, index) => (
                            <div key={index} className='text-5xl md:text-7xl font-bold relative opacity-0' id={'splyt-ifeanyi-title'}>
                                {string}
                            </div>
                        ))}
                    </div>
                    {/* <h1 className="text-5xl md:text-7xl font-bold">IFEANYI AHUMAREZE</h1> */}
                    <div className="h-[50px] w-fit mx-auto relative z-[200]">
                        <div className="w-[400px] rotate-[-4deg] h-fit text-3xl md:text-5xl font-bold py-5 bg-[#e3a458] border-[5px] border-[#7f3b2d] text-[#7f3b2d] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute">
                            OPEN TO WORK
                        </div>
                    </div>
                    <div className='flex items-center justify-center gap-0 h-fit overflow-hidden flex-wrap' ref={textRef}>
                        {'CREATIVE'.split('').map((string, index) => (
                            <div key={index} className='text-5xl md:text-7xl font-bold relative opacity-0' id={'splyt-ifeanyi-title'}>
                                {string}
                            </div>
                        ))}
                        <div className='w-[30px]' />
                        {'FRONTEND'.split('').map((string, index) => (
                            <div key={index} className='text-5xl md:text-7xl font-bold relative opacity-0' id={'splyt-ifeanyi-title'}>
                                {string}
                            </div>
                        ))}
                         <div className='w-[30px]' />
                        {'DEVELOPER'.split('').map((string, index) => (
                            <div key={index} className='text-5xl md:text-7xl font-bold relative opacity-0' id={'splyt-ifeanyi-title'}>
                                {string}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-[#7f3b2d] py-10 text-center text-white/70 flex gap-10 items-center">
                <a href='https://ifeanyicodes.com' target='_blank'>www.ifeanyicodes.com</a>
                ⚡️
                <a href='mailto:ifeanyicodes@gmail.com' target='_blank'>ifeanyicodes@gmail.com</a>
            </div>
        </div>
    )
}