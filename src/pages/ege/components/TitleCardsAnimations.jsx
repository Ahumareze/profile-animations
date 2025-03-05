import React, {useEffect, useState, useRef} from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'motion/react';

const images = [
    '/ege/image-4.JPG',
    '/ege/image-1.JPG',
    '/ege/image-2.JPG',
    '/ege/image-3.JPG',
]

function TitleCardsAnimations({animationCompleted}) {
    const [state, setState] = useState(0);

    useEffect(() => {
        let round = 0;
        let step = 0;
        let interval;
    
        const runCycle = () => {
          interval = setInterval(() => {
            setState(step);
            if (step === 3) {
              round++;
              if (round === 2) {
                clearInterval(interval);
                handleAnimationComplete(); // Call function after 2 rounds
              }
              step = 0; // Reset count for next round
            } else {
              step++;
            }
          }, 350);
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
            opacity: 1,
        }, "-=1.5")

        tl.to('.ege-card-loader', {
            top: -500,
            duration: 2.5,
            stagger: {amount: 0.25},
            ease: "power3.inOut",
            onComplete: () => animationCompleted()
        })
    }

    return (
        <div className='h-[100px] w-[250px] overflow-hidden mx-auto grid grid-cols-3 gap-2 font-mango'>
            <div className='h-[100px] w-full relative opacity-0 right-[-100px] z-[9] ege-card-loader' id='first-ege-loader-card'>
                <img 
                    src={images[0]}
                    alt=''
                    className='h-[100px] w-full object-cover'
                />
                <div className='h-[100px] w-full flex items-center justify-center'>
                    <h1 className='text-7xl font-bold text-white scale-125'>E</h1>
                </div>
                <img 
                    src={images[1]}
                    alt=''
                    className='h-[100px] w-full object-cover'
                />
                <div className='h-[100px] w-full flex items-center justify-center'>
                    <h1 className='text-7xl font-bold text-white scale-125'>E</h1>
                </div>
                <img 
                    src={images[2]}
                    alt=''
                    className='h-[100px] w-full object-cover'
                />
                <div className='h-[100px] w-full flex items-center justify-center'>
                    <h1 className='text-7xl font-bold text-white scale-125'>E</h1>
                </div>
            </div>
            <div className='h-full w-full relative z-[10] ege-card-loader'>
                <AnimatePresence>
                    <motion.div
                        key={state}
                        initial={{opacity: 0, scale: 1.1, top: 0}}
                        animate={{opacity: 1, scale: 1, top: 0}}
                        exit={{opacity: 0, scale: 1.1, top: 0}}
                        className="absolute top-0 left-0 h-[100px] w-full"
                    >
                        <img 
                            src={images[state]}
                            alt=''
                            className='h-[100px] w-full object-cover'
                        />
                        <div className='h-[100px] w-full flex items-center justify-center'>
                            <h1 className='text-7xl text-white font-bold scale-125'>G</h1>
                        </div>
                        <img 
                            src={images[0]}
                            alt=''
                            className='h-[100px] w-full object-cover'
                        />
                        <div className='h-[100px] w-full flex items-center justify-center'>
                            <h1 className='text-7xl text-white font-bold scale-125'>G</h1>
                        </div>
                        <img 
                            src={images[3]}
                            alt=''
                            className='h-[100px] w-full object-cover'
                        />
                        <div className='h-[100px] w-full flex items-center justify-center'>
                            <h1 className='text-7xl text-white font-bold scale-125'>G</h1>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className='h-[100px] w-full bg-transparent relative opacity-0 left-[-100px] z-[9] ege-card-loader' id='third-ege-loader-card'>
                <img 
                    src={images[1]}
                    alt=''
                    className='h-[100px] w-full object-cover'
                />
                <div className='h-[100px] w-full flex items-center justify-center'>
                    <h1 className='text-7xl text-white font-bold scale-125'>E</h1>
                </div>
                <img 
                    src={images[2]}
                    alt=''
                    className='h-[100px] w-full object-cover'
                />
                <div className='h-[100px] w-full flex items-center justify-center'>
                    <h1 className='text-7xl text-white font-bold scale-125'>E</h1>
                </div>
                <img 
                    src={images[0]}
                    alt=''
                    className='h-[100px] w-full object-cover'
                />
                <div className='h-[100px] w-full flex items-center justify-center'>
                    <h1 className='text-7xl text-white font-bold scale-125'>E</h1>
                </div>
            </div>
        </div>
    )
}

export default TitleCardsAnimations