import React from 'react'
import { PiStarFourFill } from "react-icons/pi";

import classes from './style.module.css'

function AnimatedStrip() {
    return (
        <div className='h-[50px] w-full bg-yellow-500 mt-10 relative'>
            <div className={`h-full w-fit gap-10 flex items-center text-black/60 absolute ${classes.animatedStrip}`}>
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>React Js</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>Next Js</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>GSAP</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>Zustand</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>Three Js</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>Framer</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>Redux</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>React Native</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>WebGL</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>Redux</p>
                <PiStarFourFill />
                <p className='italic text-lg font-medium min-w-[200px] max-w-[200px] text-center'>Typescript</p>
            </div>
        </div>
    )
}

export default AnimatedStrip