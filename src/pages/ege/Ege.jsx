import React, { useEffect, useRef, useState } from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'motion/react';

const images = [
    '/ege/image-4.JPG',
    '/ege/image-1.JPG',
    '/ege/image-2.JPG',
    '/ege/image-3.JPG',
]

function Ege() {
    const containerRef = useRef(null);

    const [state, setState] = useState(1);

    useEffect(() => {
        let round = 0;
        let delay = 350; // Start with 0.5s
        let interval;

        const runCycle = () => {
            let count = 1;
            interval = setInterval(() => {
                setState(count);
                count++;

                if (count > 4) {
                    clearInterval(interval);
                    round++;
                    if (round < 2) {
                        delay += 0; // Increase delay by 0.075s each round
                        setTimeout(runCycle, delay); // Wait before next round
                    }else{
                        handleAnimationComplete()
                    }
                }
            }, delay);
        };

        runCycle();

        return () => clearInterval(interval);
    }, []);

    const handleAnimationComplete = () => {

        let tl = gsap.timeline({defaults: {ease: "power3.inOut"}})

        tl.to('#first-ege-loader-card', {
            backgroundColor: '#fff',
            right: 0,
            duration: 1.5,
            opacity: 1
        })

        tl.to('#third-ege-loader-card', {
            backgroundColor: '#fff',
            left: 0,
            duration: 1.5,
            opacity: 1
        }, "-=1.5")

        tl.to('.ege-card-loader', {
            top: -100,
            duration: 1.5,
            stagger: {amount: 0.5},
            ease: "power3.inOut"
        })
    }

    return (
        <div className='min-h-screen w-full bg-black' ref={containerRef}>
            <div className='h-[100px] w-[250px] overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-3 gap-2'>
                <div className='h-full w-full relative opacity-0 right-[-100px] z-[9] ege-card-loader' id='first-ege-loader-card'>
                    <img 
                        src={images[0]}
                        alt=''
                        className='h-full w-full object-cover'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h1 className='text-5xl font-bold text-white'>E</h1>
                    </div>
                </div>
                <div className='h-full w-full relative z-[10] ege-card-loader'>
                    <AnimatePresence>
                        <motion.div
                            key={state}
                            initial={{opacity: 0, scale: 0.8, top: 10}}
                            animate={{opacity: 1, scale: 1, top: 0}}
                            exit={{opacity: 0, scale: 0.8, top: -10}}
                            className="absolute top-0 left-0 h-full w-full"
                        >
                            <img 
                                src={images[state - 1]}
                                alt=''
                                className='h-full w-full object-cover'
                            />
                            <div className='h-full w-full flex items-center justify-center'>
                                <h1 className='text-5xl text-white font-bold'>G</h1>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                <div className='h-full w-full bg-transparent relative opacity-0 left-[-100px] z-[9] ege-card-loader' id='third-ege-loader-card'>
                    <img 
                        src={images[1]}
                        alt=''
                        className='h-full w-full object-cover'
                    />
                    <div className='h-full w-full flex items-center justify-center'>
                        <h1 className='text-5xl text-white font-bold'>E</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ege