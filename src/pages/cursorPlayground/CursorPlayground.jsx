import React from 'react'
import CustomCursor from './CustomCursor'

import { ArtistCard } from '../../components/cards/AlbumsCard';
import BasketBallCard from '../../components/cards/BasketBallCard';

function CursorPlayground() {

    

    return (
        <div className='h-screen w-full bg-red-100 flex items-center justify-center'>
            <CustomCursor />
            {/* <div className='h-fit w-[500px] p-3 bg-white border border-black/20 rounded-xl space-y-3'>
                <ArtistCard
                    image={'/music/morayo.jpeg'}
                    artist={'Wizkid'}
                    name={'Morayo'}
                />
                <ArtistCard
                    image={'/music/5ive.jpg'}
                    artist={'Davido'}
                    name={'5ive'}
                />
                <ArtistCard
                    image={'/music/heis.jpeg'}
                    artist={'Rema'}
                    name={'HEIS'}
                />
            </div> */}
            <div className='h-fit w-fit grid grid-cols-3 gap-10'>
                <BasketBallCard />
                <BasketBallCard />
                <BasketBallCard />
            </div>
        </div>
    )
}

export default CursorPlayground