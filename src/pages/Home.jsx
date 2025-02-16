import React from 'react'
import LoaderContainer from '../container/LoaderContainer'

function Home() {
    return (
        <LoaderContainer>
            <div className='w-full min-h-screen'>
                <div className='py-20 w-full mt-20 px-[20px]'>
                    <h1 className='text-5xl font-bold text-center'>A couple <span className='text-blue-500'>cool stuff</span> I'm working on ⚡️</h1>
                </div>
                <div className='px-[20px] md:px-[50px] grid grid-cols-1 md:grid-cols-2 gap-10 pb-20'>
                    <a href='https://rhymezlikedimez.ifeanyicodes.com/' target='_blank'>
                        <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] duration-300 ease-in-out'>
                            <img
                                src='/rhymezlikedimez.gif'
                                alt='rhymez like dimez'
                                className='w-full rounded-xl max-h-[400px]'
                            />
                            <p className='mt-5 mb-2 text-lg text-black/70'>Created this cool portfolio website for a really talented motion designer to showcase his amazing talent</p>
                            <p className='text-black/70'>React 🔸 Gsap 🔸 Tailwind CSS</p>
                        </div>
                    </a>
                    <a href='/spylt'>
                        <div className='w-full p-5 rounded-xl hover:bg-[#f5f5f5] duration-300 ease-in-out'>
                            <img
                                src='/splyt-project.png'
                                alt='rhymez like dimez'
                                className='w-full rounded-xl max-h-[400px] object-cover'
                            />
                            <p className='mt-5 mb-2 text-lg text-black/70'>Created this cool portfolio website for a really talented motion designer to showcase his amazing talent</p>
                            <p className='text-black/70'>React 🔸 Gsap 🔸 Tailwind CSS</p>
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