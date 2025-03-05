import gsap from 'gsap'
import React, { useEffect } from 'react'

function AwwwardsCard({fireAnimations}) {

    useEffect(() => {
        if(!fireAnimations)return

        let tl = gsap.timeline({defaults: {ease: "power1.out"}})

        tl.to('#ege-awwwards-card', {
            right: 0,
            opacity: 1,
            delay: 1
        })

    }, [fireAnimations])

    return (
        <div className='absolute right-[-100px] opacity-0 top-1/2 -translate-y-1/2 px-3 py-3 bg-white/10 text-white/80 flex flex-col items-center rounded-r-0' id='ege-awwwards-card'>
            <h3 className='text-xl font-bold'>W.</h3>
            <div className='flex items-center justify-center w-[20px] h-[70px] mt-5'>
                <p className='rotate-[-90deg] font-medium'>Honors</p>
            </div>
        </div>
    )
}

export default AwwwardsCard