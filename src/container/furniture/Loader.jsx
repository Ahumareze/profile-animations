import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

function Loader() {

    useGSAP(() => {
        let tl = gsap.timeline();
        let tl2 = gsap.timeline();

        tl2.to('#backdrop-loading-text', {
            top: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.inOut'
        })

        tl.to('#backdrop-couch', {
            top: 0,
            // background: '#00000020',
            duration: 1.2,
            ease: 'power3.inOut'
        })

        tl.to('#backdrop-loading-text', {
            top: 200,
            opacity: 0,
            delay: 3.5,
            duration: 1,
            ease: 'power3.inOut'
        })

        tl2.to('#backdrop-slider', {
            width: '100vw',
            delay: 0.2,
            duration: 6,
            ease: 'power3.inOut'
        })
    }, {})

    return (
        <div className=''>
            <div className='fixed top-0 left-0 h-screen w-full flex z-[98]'>
                <div className='h-full w-0' id='backdrop-slider' />
                <div className='flex-1 h-full bg-[#8c7153]' />
            </div>
            <div className='fixed top-0 left-0 h-screen w-full p-10 md:p-20 text-white text-center z-[99]'>
                <h1 className='font-mango text-5xl font-bold pt-20 relative top-[300px] opacity-0' id='backdrop-loading-text'>LOADING...</h1>
            </div>
            <div className='fixed top-[400px] left-0 h-screen w-full bg-center bg-no-repeat bg-cover z-[100]' id='backdrop-couch' style={{backgroundImage: `url(${'/png-couch.png'})`}}>

            </div>
        </div>
    )
}

export default Loader