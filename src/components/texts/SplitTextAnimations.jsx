import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'

function SplitTextAnimations({text, style, animate}) {
    const textRef = useRef(null);

    useEffect(() => {
        const text = textRef.current

        if(!animate) return

        gsap.fromTo(text,
            { opacity: 1, y: 150 }, // Initial state (hidden)
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: {amount: 0.5} } // Final state (visible)
        );

    }, [animate])

    return (
        <div className='flex items-center gap-0'>
            {text.split('').map((string, index) => (
                <div key={index} className={`text-5xl md:text-7xl font-bold relative opacity-1 ${style}`} ref={textRef}>
                    {string}
                </div>
            ))}
        </div>
    )
}

export default SplitTextAnimations