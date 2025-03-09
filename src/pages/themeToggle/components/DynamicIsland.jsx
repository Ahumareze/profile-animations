import gsap from 'gsap';
import React, { useRef, useState } from 'react';
// import { IonToggle } from '@ionic/react';
import { FaPlayCircle, FaVolumeUp } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";

const imageCover = '/morayo.jpeg'

function DynamicIsland({handleClick, isDarkMode}) {
    const dynamicIslandImage = useRef(null);
    const modalref = useRef(null);
    const modalImageRef = useRef(null);
    const currentlyPlayingRef = useRef(null);
    const playContainerRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const volumeSlideRef = useRef(null);

    const [showDetails, setShowDetails] = useState(false);

    const handleShowModalAnimation = () => {

        console.log('here')

        let tl = gsap.timeline({});

        tl.to(modalref.current, {
            height: 220,
            paddingTop: 10
        })

        tl.to(dynamicIslandImage.current, {
            top: 46,
            opacity: 0
        }, "-=0.5");

        tl.to(modalImageRef.current, {
            opacity: 1,
        }, "-=0.4")

        tl.to(modalImageRef.current, {
            height: 200,
            width: '100%',
        }, "-=0.5")

        tl.to(currentlyPlayingRef.current, {
            x: -50,
        },"-=0.5")

        

        //hide the toggle button
        tl.to(toggleButtonRef.current, {
            right: -100,
            width: 0,
            opacity: 0,
            duration: 0.5
        }, "-0.1")

        //expand the play container
        tl.to(playContainerRef.current, {
            width: '100%',
        },"-=0.1");

        tl.to(volumeSlideRef.current, {
            top: 0,
            opacity: 1
        })

        console.log('hello world')
    };

    const VolumeSlider = () => {
        return(
            <div className='flex-1 h-full relative top-10 opacity-0' ref={volumeSlideRef}>
                <div className='h-[20px] w-full flex gap-2 items-center justify-center text-white'>
                    <FaVolumeXmark />
                        <div className='flex-1 h-[4px] bg-blue-500 rounded-full' />
                    <FaVolumeUp />
                </div>
            </div>
        )
    }

    return (
        <div className=''>
            <div className='fixed top-[15px] left-[15px]'>
                <img className='h-[20px] w-[30px] bg-red-500' />
            </div>
            <div className={`fixed top-[15px] left-1/2 -translate-x-1/2 h-fit w-[500px] px-3 py-[7px] overflow-hidden  border ${isDarkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-black border-black'} rounded-3xl duration-300 ease-in-out`}>
                <div className='flex items-center justify-between h-[35px] w-full gap-2  z-[100]'>
                    <div className='w-fit flex h-full items-center gap-3 text-white cursor-pointer relative' ref={playContainerRef} onClick={handleShowModalAnimation}>
                        <img 
                            className='h-[35px] w-[40px] rounded-md relative' 
                            src={imageCover}
                            alt='Abbey road'
                            ref={dynamicIslandImage}
                        />
                        <div className='flex flex-1 items-center'>
                            <p className='relative' ref={currentlyPlayingRef}>Wizkid - Kese (Dance)</p>
                            <VolumeSlider />
                        </div>
                        <FaPlayCircle size={22} className='' />
                    </div>
                    <div className='h-full w-[100px] rounded-full bg-orange-500 cursor-pointer relative' ref={toggleButtonRef} onClick={handleClick}>
                        {/* <IonToggle aria-label="Success toggle" color="success" checked={true}></IonToggle> */}
                    </div>
                </div>
                <div className='h-[0px] w-full z-[45] grid grid-cols-2 gap-5 bg-white/10' ref={modalref}>
                    <img
                        className='h-[35px] w-[40px] rounded-md relative opacity-0' 
                        src={imageCover}
                        alt='Abbey road'
                        ref={modalImageRef}
                    />
                </div>
            </div>
        </div>
    )
}

export default DynamicIsland