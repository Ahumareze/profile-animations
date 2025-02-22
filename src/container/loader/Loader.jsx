import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Loader({backdrop}) {

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.to('#loader-indicator', {
            width: '100%',
            duration: 6,
            ease: "power1.inOut"
        });

        tl.to('#loader-container', {
            top: '-100vh',
            duration: 1,
            ease: "power1.inOut"
        })
    }, {})

    return (
        <div>
            <div className={`h-screen w-full fixed top-0 left-0 z-[10001] flex flex-col gap-10 ${backdrop}`} id='loader-container'>
                <div className='flex-1 w-full flex flex-col items-center justify-center'>
                    
                    <div className='w-fit mx-auto pb-5'>
                        <img
                            src='favicon.jpg'
                            alt='favicon'
                            className='h-[100px] w-[100px] rounded-2xl border-4 border-white shadow-lg hover:rotate-[-5deg] hover:scale-105 duration-300 ease-in-out'
                        />
                    </div>
                    <h1 className='text-5xl md:text-7xl font-extrabold text-center font-mango uppercase'>PUSHING THE <span className='text-red-400'>LIMITS</span> OF THE WEB</h1>
                </div>
                <div className='p-10'>
                    <div className='h-[10px] w-full bg-red-100 rounded-full flex items-center justify-start'>
                        <div className='w-[20px] h-full rounded-full bg-red-400' id='loader-indicator' /><p className='text-3xl md:text-4xl relative right-2'>🏀</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader