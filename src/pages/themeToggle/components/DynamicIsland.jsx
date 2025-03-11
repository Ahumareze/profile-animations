import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
// import { IonToggle } from '@ionic/react';
import { FaPauseCircle, FaPlayCircle, FaVolumeUp } from "react-icons/fa";
import { FaVolumeXmark } from "react-icons/fa6";
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5";
import { albums } from '../../../constants/music';
import { AnimatePresence, motion } from 'motion/react';

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

    
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedAlbum, setSelectedAlbum] = useState(albums[selectedIndex]);

    useEffect(() => {
        setSelectedAlbum(albums[selectedIndex])
    }, [selectedIndex])

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

        tl.fromTo(modalImageRef.current, {
            height: 35,
            width: 40
        }, {
            height: '100%',
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

        console.log('hello world')
    };

    const handleNextClick = () => {
        if(selectedIndex === 2){
            setSelectedIndex(0)
        }else{
            setSelectedIndex(prev => prev + 1)
        }
    }

    const handleBackClick = () => {
        if(selectedIndex === 0){
            setSelectedIndex(2)
        }else{
            setSelectedIndex(prev => prev - 1)
        }
    }

    const LengthSlider = () => {
        return(
            <div className='w-full space-y-3'>
                <div className='w-full h-[3px] bg-white/20 rounded-full'>
                    <div className='w-[35%] h-full bg-white rounded-full flex items-center justify-end'>
                        <div className='h-[10px] w-[10px] bg-white rounded-full' />
                    </div>
                </div>
                <div className='flex items-center justify-between text-sm text-white/90'>
                    <p>0:37</p>
                    <p>3:26</p>
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
                            src={selectedAlbum.cover}
                            alt='Abbey road'
                            ref={dynamicIslandImage}
                        />
                        <div className='flex flex-1 items-center'>
                            <p className='relative' ref={currentlyPlayingRef}>{selectedAlbum.title}</p>
                            
                        </div>
                        <FaPlayCircle size={22} className='' />
                    </div>
                    <div className='h-full w-[100px] rounded-full bg-orange-500 cursor-pointer relative' ref={toggleButtonRef} onClick={handleClick}>
                        {/* <IonToggle aria-label="Success toggle" color="success" checked={true}></IonToggle> */}
                    </div>
                </div>
                <div className='h-[0px] w-full z-[45] grid grid-cols-2 gap-5  box-border' ref={modalref}>
                    <div className='w-full h-full overflow-hidden relative'>
                    <AnimatePresence>
                        <motion.div 
                            className='h-full w-full overflow-hidden pb-2 absolute top-0 left-0'
                            key={selectedIndex}
                            initial={{scale: 0.5, opacity: 0.6}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0.5, opacity: 0}}
                        >
                            <img
                                // className='h-[35px] w-[40px] rounded-xl relative opacity-0 object-cover' 
                                className='h-full w-full rounded-xl relative opacity-1 object-cover' 
                                src={selectedAlbum.cover}
                                alt='Abbey road'
                                ref={modalImageRef}
                            />
                        </motion.div>
                    </AnimatePresence>
                    </div>
                    <div className='w-full h-full flex flex-col gap-5 justify-end items-center pb-10'>
                        <div className='h-fit w-full bg-white/20 rounded-lg flex items-center gap-2 p-2 text-white font-medium'>
                            <img
                                src={selectedAlbum.artist.image}
                                alt='wizkid'
                                className='h-[30px] w-[30px] rounded-full object-cover'
                            />
                            <p>{selectedAlbum.artist.name}</p>
                        </div>
                        <LengthSlider />
                        
                        <div className='w-full h-fit flex items-center justify-between text-white px-5'>
                            <IoPlaySkipBack size={25} className='cursor-pointer' onClick={handleBackClick} />
                                <FaPauseCircle size={45} className='cursor-pointer' />
                            <IoPlaySkipForward size={25} className='cursor-pointer' onClick={handleNextClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DynamicIsland