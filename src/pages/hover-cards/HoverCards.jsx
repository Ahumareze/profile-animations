import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react';

const images = [
    '/ege/image-1.JPG',
    '/ege/image-2.JPG',
    '/ege/image-3.JPG',
]

function HoverCards() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    const [imageIndex, setImageIndex] = useState(0)

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isInside, setIsInside] = useState(false);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (imageRef.current) {
          const { offsetWidth, offsetHeight } = imageRef.current;
          setImageSize({ width: offsetWidth, height: offsetHeight });
        }
      }, []);

    const handleMouseMove = (e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        // const x = e.clientX - left;
        // const y = e.clientY - top;
        const x = e.clientX - left;
        const y = e.clientY - top;
        setPosition({ x, y });
        setIsInside(true);
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
        setIsInside(false);
    };

    const SelectorItem = ({title, index}) => {
        return(
            <div 
                className='w-full flex items-center gap-5 cursor-pointer'
                onMouseEnter={() => setImageIndex(index)}
            >
                <div className='h-[15px] w-[15px] bg-black rotate-45'/>
                <p className='text-4xl font-bold'>{title}</p>
            </div>
        )
    }

    return (
        <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='h-screen w-full bg-red-500 flex items-center relative'
        >
            <div className='w-full px-10 bg-blue-500 flex items-center gap-10'>
                <SelectorItem
                    title={'Creative'}
                    index={0}
                />
                <SelectorItem
                    title={'Talented'}
                    index={1}
                />
                <SelectorItem
                    title={'Expert'}
                    index={2}
                />
            </div>
            {isInside && (
                // <AnimatePresence>
                    <motion.span
                        key={imageIndex}
                        ref={imageRef}
                        className="absolute h-[300px] w-[300px] rounded-md overflow-hidden bg-white"
                        initial={{opacity: 0, rotate: 45}}
                        animate={{
                            x: position.x,
                            y: position.y,
                            transition: { type: 'spring', stiffness: 200, damping: 50 },
                            opacity: 1,
                            rotate: 0
                        }}
                        exit={{opacity: 0, rotate: 45}}
                    >
                        {/* <img
                            src={images[imageIndex]}
                            alt=''
                            className='h-full w-full object-cover'
                        /> */}
                    </motion.span>
                // </AnimatePresence>
            )}
        </div>
    )
}

export default HoverCards