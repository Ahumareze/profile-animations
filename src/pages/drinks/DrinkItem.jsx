import { useState, useRef } from 'react';

export default function DrinkItem({title, image, bg, index, pieces, style, backgroud}){
    const [transform, setTransform] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const imgRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!containerRef.current || !imgRef.current) return;
      
        // Get container dimensions
        const rect = containerRef.current.getBoundingClientRect();
        
        // Mouse position relative to container
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
      
        // Image center position
        const imgRect = imgRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
      
        // Calculate distance from center
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
      
        // Calculate movement (max 30px distance)
        const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
        const maxDistance = 30;
        
        const moveX = distance > maxDistance ? (deltaX / distance) * maxDistance : deltaX;
        const moveY = distance > maxDistance ? (deltaY / distance) * maxDistance : deltaY;
      
        setTransform({ x: moveX, y: moveY });
      };
      
      const handleMouseLeave = () => {
        setTransform({ x: 0, y: 0 });
      };

    const id = 'item-' + index

    return(
        <div 
            className={`h-[500px] w-full md:min-w-[650px] md:max-w-[650px] relative overflow-hidden group ${style}`}
            id={id} 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div 
                className={`h-[400px] w-full rounded-2xl mt-[100px] ${bg}`}
                style={{ backgroundImage: `url(${backgroud})`}}
            >
                <img
                    src={image}
                    alt=''
                    className='h-[120%] mx-auto relative top-[-20%] group-hover:rotate-[-4deg] group-hover:scale-[1.1] duration-300 ease-in-out'
                />
            </div>
            <div className='h-full w-full absolute top-0 left-0 p-5 items-start flex flex-col'>
                <div className='h-full w-full relative'>
                    <img
                        src={pieces}
                        alt=''
                        ref={imgRef}
                        style={{
                            position: 'absolute',
                            transition: 'transform 0.3s ease-out',
                            transform: `translate(${transform.x}px, ${transform.y}px)`
                        }}
                    />
                </div>
                <h1 className='text-4xl uppercase text-white font-bold'>{title}</h1>
            </div>
        </div>
    )
}