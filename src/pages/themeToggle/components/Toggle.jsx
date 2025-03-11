import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { LuMoonStar } from "react-icons/lu";

function Toggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const iconRef = useRef(null);

    const handleClick = () => {
        let tl = gsap.timeline({});

        if(!isDarkMode){

            tl.to(iconRef.current, {
                rotate: 360,
                right: -15
            })

            setIsDarkMode(true)
        }else{

            tl.to(iconRef.current, {
                rotate: 360,
                right: 0
            })

            setIsDarkMode(false)
        }

        return
    }

    return (
        <div className={`h-[20px] w-[40px] relative rounded-full cursor-pointer flex items-center duration-300 ease-in-out delay-100 ${isDarkMode ? 'bg-orange-500' : 'bg-white/30'}`} onClick={handleClick}>
            <div className='h-[25px] w-[25px] rounded-full bg-white rounded-full flex items-center justify-center relative' ref={iconRef}>
                {isDarkMode ? (
                    <LuMoonStar />
                ) : (
                    <IoIosSunny />
                )}
            </div>
        </div>
    )
}

export default Toggle