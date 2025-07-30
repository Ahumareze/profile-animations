'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImageCard({imageUrl}) {
  const imageRef = useRef(null);
  const containerRef = useRef(null); // Ref for the container

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    gsap.to(imageRef.current, {
      scale: 1.1,
      top: -100,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current, // Use container as the trigger
        start: 'top 90%',
        end: 'bottom 40%',
        scrub: true,
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[90%] bg-white shadow-lg flex flex-col"
    >
      <div className="h-[500px] relative overflow-hidden">
        <img
          ref={imageRef}
          src={imageUrl}
          alt=""
          className="w-full h-full object-cover relative top-[200px] scale-[1.5]"
        />
        <div className="h-full w-full absolute top-0 left-0 border-[20px] border-white" />
      </div>
      <div className="w-full h-10" />
    </div>
  );
}
