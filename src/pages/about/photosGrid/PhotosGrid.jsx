import React, { useEffect, useRef, useState } from 'react'
import PhotoContainer from './PhotoContainer'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react"
gsap.registerPlugin(ScrollTrigger);

function PhotosGrid() {
    const containerRef = useRef(null);

    const [displayText, setDisplayText] = useState('Where the cooking happens')

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isInside, setIsInside] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setPosition({ x, y });
        setIsInside(true);
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsInside(false);
    };


    useEffect(() => {
        const container = containerRef.current;

        let tl = gsap.timeline({defaults: {ease: "power1.inOut"}});

        tl.to('#photo-grid-cover', {
            height: 0,
            stagger: {amount: 0.3},
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
                end: '10% 20%',
                // markers: true,
                scrub: true
            }
        })

    }, [])

    return (
        <div 
            className='h-[80vh] grid grid-cols-3 relative' 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <PhotoContainer
                photo={'/kanye.jpeg'}
                handleHover={() => setDisplayText('My partner in crime, Kanye')}
            />
            <PhotoContainer
                photo={'/desktop.png'}
                handleHover={() => setDisplayText('Where the cooking happens')}
            />
            <PhotoContainer
                photo={'/sketch.jpg'}
                handleHover={() => setDisplayText('Occasional sketches (more on my pinterest)')}
            />
            {isInside && (
                <motion.span
                className="absolute text-xl font-bold text-white cursor-pointer"
                    animate={{
                        x: position.x - 40,
                        y: position.y - 10,
                        transition: { type: 'spring', stiffness: 150, damping: 20 },
                    }}
                >
                    {displayText}
                </motion.span>
            )}
            
        </div>
    )
}

export default PhotosGrid