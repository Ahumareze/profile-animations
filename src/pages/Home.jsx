import React from 'react'
import LoaderContainer from '../container/loader/LoaderContainer'
import { FaGlobe } from 'react-icons/fa6'
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import CustomCursor from './cursorPlayground/CustomCursor'

function Home() {
    return (
        <LoaderContainer backdrop={'bg-white'}>
            {/* <CustomCursor /> */}
            <div className='w-full min-h-screen'>
                <div className='py-20 w-full mt-20 px-[20px]'>
                    <h1 className='text-5xl md:text-7xl font-extrabold text-center font-mango uppercase'>A couple <span className='text-blue-500'>cool stuff</span> I'm working on ⚡️</h1>
                </div>
                <div className='px-[20px] md:px-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <a href='https://rhymezlikedimez.ifeanyicodes.com/' target='_blank'>
                        <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] hover:scale-105 hover:shadow-md duration-300 ease-in-out cursor-pointer'>
                            <img
                                src='/rhymezlikedimez.gif'
                                alt='rhymez like dimez'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg font-medium text-black/70'>Created this cool portfolio website for a really talented motion designer to showcase his amazing talent</p>
                            <p className='text-black/70 text-sm'>Next JS 🔸 Gsap 🔸 Tailwind CSS</p>
                        </div>
                    </a>
                    <a href='https://uzoamaka-portfolio.ifeanyicodes.com/'>
                        <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] hover:scale-105 hover:shadow-md duration-300 ease-in-out cursor-pointer'>
                            <img
                                src='/projects/uzoamaka-portfolio.png'
                                alt='uzoamaka'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg font-medium text-black/70'>Creative Frontend portfolio development for award-winning actress Uzoamaka Aniunoh, showcasing her journey and achievements</p>
                            <p className='text-black/70 text-sm'>Gsap 🔸 Motion</p>
                        </div>
                    </a>
                    <a href='https://macos-portfolio.ifeanyicodes.com/'>
                        <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] hover:scale-105 hover:shadow-md duration-300 ease-in-out cursor-pointer'>
                            <img
                                src='/projects/desktop-portfolio.png'
                                alt='ifeanyi ahumareze macOs themed portfolio'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg font-medium text-black/70'>I created a MacOs themed version of my portfolio website. Fast, interactive and easy to navigate.</p>
                            <p className='text-black/70 text-sm'>React 🔸 Tailwind CSS</p>
                        </div>
                    </a>
                    <a href='/eyes-tracker'>
                        <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] hover:scale-105 hover:shadow-md duration-300 ease-in-out cursor-pointer'>
                            <img
                                src='/projects/mouse-tracker.gif'
                                alt='mouse tracker'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg font-medium text-black/70'>A Fun mouse tracker effect</p>
                            <p className='text-black/70 text-sm'>Tailwind CSS</p>
                        </div>
                    </a>
                    {/* <a href='#'> */}
                        <div className='w-full p-5 rounded-xl hover:bg-red-200 cursor-not-allowed'>
                            <img
                                src='/projects/keyboard.png'
                                alt='3d keyboard'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg font-medium text-black/70'>3D Interactive shopping experience (Work In Progress 🚧)</p>
                            <p className='text-black/70 text-sm'>ThreeJS 🔸 R3F</p>
                        </div>
                    {/* </a> */}
                    <a href='/spylt'>
                        <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] hover:scale-105 hover:shadow-md duration-300 ease-in-out cursor-pointer'>
                            <img
                                src='/splyt-project.png'
                                alt='spylt project'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg font-medium text-black/70'>An interactive product listing feature for Spylt. Features scroll to swipe, 3d hover effect and some really cool animations</p>
                            <p className='text-black/70 text-sm'>React 🔸 Gsap 🔸 Tailwind CSS</p>
                        </div>
                    </a>
                    
                    {/* <a href='/spylt'> */}
                        {/* <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] duration-300 ease-in-out cursor-none'>
                            <img
                                src='/projects/threeJsGameImage.png'
                                alt='threejs project'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg font-medium text-black/70'>Fully customizable & interactive 3D web game. (Coming soon 🕒)</p>
                            <p className='text-black/70 text-sm'>Three Js 🔸 R3F 🔸 WebGL</p>
                        </div> */}
                    {/* </a> */}
                    {/* <a href='/future-furnitures'> */}
                        {/* <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] duration-300 ease-in-out cursor-not-allowed'>
                            <img
                                src='/projects/about-project.png'
                                alt='rhymez like dimez'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg text-black/70 font-medium'>Coming soon 🔒</p>
                            <p className='text-black/70'>Next Js 🔸 Three Js 🔸 GSAP 🔸 WebGl 🔸 Tailwind CSS</p>
                        </div> */}
                    {/* </a> */}
                    {/* <a href='/future-furnitures'> */}
                    {/* <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] duration-300 ease-in-out cursor-not-allowed'>
                            <img
                                src='/furniture-hero-image.png'
                                alt='rhymez like dimez'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg text-black/70'>Coming soon 🔒</p>
                            <p className='text-black/70'>React 🔸 Gsap 🔸 Tailwind CSS</p>
                        </div> */}
                    {/* </a> */}
                </div>
                <div className='w-full py-10 pb-20 flex items-center justify-center'>
                    <a href="https://ifeanyicodes.com" target="_blank">
                        <div className="flex items-center gap-2 px-5 py-2 bg-[#f5f5f5] hover:bg-[#eee] text-black/80 rounded-full duration-300 ease-in-out group">
                            <p className="font-medium hidden md:flex">All projects on my Portfolio</p>
                            <FiArrowUpRight className='group-hover:rotate-45 duration-300 ease-in-out' />
                        </div>
                    </a>
                </div>
                <div className='py-10 px-[20px] text-lg mx:text-2xl text-center bg-[#f5f5f5]'>
                    Let's Work, <a href='mailto:ifeanyicodes@gmail.com'>ifeanyicodes@gmail.com 👋</a>
                </div>
            </div>
        </LoaderContainer>
    )
}

export default Home