import React from 'react'
import FurnitureLoaderContainer from '../../container/furniture/FurnitureLoaderContainer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const bg = 'https://m.media-amazon.com/images/I/719Sv+fhblL.jpg'

function Furniture() {

    useGSAP(() => {
        let tl = gsap.timeline();

        tl.fromTo('#furniture-hero-contents', {
            opacity: 0,
            top: 200
        }, {
            opacity: 1,
            top: 0,
            delay: 5.5,
            duration: 0.8,
            stagger: {amount: 0.3}
        })
    }, {})

    return (
        <FurnitureLoaderContainer>
            <div className='w-full'>
                <div className='h-screen w-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(${bg})`}}>
                    <div className='w-full h-screen bg-black/20 p-10 md:p-20 text-white text-center'>
                        <h1 className='text-5xl md:text-7xl font-mango font-bold relative' id='furniture-hero-contents'>Ceni 83" Sofa - Hemlock Green</h1>
                        <p className='max-w-[800px] mx-auto text-lg font-semibold mt-2 mb-5 relative' id='furniture-hero-contents'>Pleasingly symmetrical, the Ceni is for those who need things to be in order before they can relax. Spring and foam cushions make for a firm, yet supportive seat. Soft, lightly textured fabric makes for an easy place to lounge.</p>
                        <button className='text-black w-fit px-5 bg-white rounded-full font-bold relative text-lg flex items-center justify-center h-[40px] mx-auto' id='furniture-hero-contents'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </FurnitureLoaderContainer>
    )
}

export default Furniture