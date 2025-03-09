import React, { useState } from 'react'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TitleCardsAnimations from './components/TitleCardsAnimations';
import HeroTextsAnimations from './components/HeroTextsAnimations';
import Header from './components/Header';
import AwwwardsCard from './components/AwwwardsCard';
import MouseTrail from './components/MouseTrail';

function Ege() {
    const [ titleCardsAnimationsDone, setTitleCardsAnimationsDone ] = useState(false);

    return (
        <div>
            <div className='min-h-screen w-full bg-black flex items-center justify-center relative'>
                <Header 
                    fireAnimations={titleCardsAnimationsDone} 
                />
                <div className='w-fit mx-auto'>
                    <TitleCardsAnimations
                        animationCompleted={() => setTitleCardsAnimationsDone(true)}
                    />
                    <HeroTextsAnimations
                        startAnimations={titleCardsAnimationsDone}
                    />
                </div>
                <AwwwardsCard
                    fireAnimations={titleCardsAnimationsDone}
                />
                {/* <div className='h-full w-full absolute top-0 left-0'>
                    <MouseTrail />
                </div> */}
            </div>
        </div>
    )
}

export default Ege