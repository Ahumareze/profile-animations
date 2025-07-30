import ImageCard from "./ImageCard";
import { useEffect, useRef, useState } from "react";

import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Section({isReverse, imageUrl}){
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subTextRef = useRef<HTMLHeadingElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const containerRef2 = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                handleTextAnimations();
                observer.disconnect();
            }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        }
        );

        if (containerRef.current) {
        observer.observe(containerRef.current);
        }

        // Cleanup function
        return () => {
        observer.disconnect();
        };
    }, []);

    const handleTextAnimations = () => {
        if (!headlineRef.current || !containerRef.current) return;
        let tl = gsap.timeline({});
    
        document.fonts.ready.then(() => {
            const split = new SplitText(headlineRef.current, {
                type: 'lines',
                linesClass: 'line-mask'
            });
    
            gsap.set(split.lines, { yPercent: 200, opacity: 0 });

            containerRef.current.style.visibility = 'visible';
            containerRef2.current.style.visibility = 'visible';

            tl.to(split.lines, {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                delay: 0.2,
                ease: 'power4.out',
                stagger: 0.1,
            });

            tl.to(subTextRef.current, {
                opacity: 1,
                translateY: 0,
                stagger: 0.3,
                // duration: 0.7,
            }, "-=0.4")
        });
    };

    return(
        <div className={`w-full flex gap-10 items-center ${isReverse && 'flex-row-reverse'}`}>
            <div className="h-[600px] flex-1 flex items-center justify-around">
                <ImageCard
                    imageUrl={imageUrl}
                />
            </div>
            <div className={`flex-1 text-center`}>
                <div className="overflow-hidden" style={{ visibility: 'hidden' }} ref={containerRef}>
                    <h1 className="text-6xl font-extrabold" ref={headlineRef}>AKIRA LIFESTYLE</h1>
                </div>
                <div className="overflow-hidden" style={{ visibility: 'hidden' }} ref={containerRef2}>
                    <p className="text-xl text-black/70 mt-5" ref={subTextRef}>This is not at all related to GSAP but yet another shortcoming of the app router which has created a lot of confusion among developers in many ways.</p>
                </div>
                
            </div>
        </div>
    )
}