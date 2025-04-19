import React from 'react'
import CustomCursor from './CustomCursor'
import { FaPlay } from "react-icons/fa";

function CursorPlayground() {

    const Card = ({image, artist, name}) => {
        return(
            <div className='h-fit w-full group flex items-center justify-between gap-5 p-2 rounded-md hover:bg-[#f5f5f5] duration-300 ease-in-out'>
                <div className='flex gap-3 items-center'>
                    <img
                        src={image}
                        alt=''
                        className='h-[100px] w-[100px] object-cover rounded-md'
                    />
                    <div className='h-fit'>
                        <h1 className='text-2xl font-medium'>{name}</h1>
                        <p className='text-black/60 mt-1'>{artist}</p>
                        <img
                            src='/music/spotify.webp'
                            alt='spotify logo'
                            className='h-[20px] mt-3'
                        />
                    </div>
                </div>
                <div className='h-[40px] w-[40px] rounded-full bg-[#1ed760] relative translate-x-[-50px] group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center text-black text-xs'>
                    <FaPlay />
                </div>
            </div>
        )
    }

    return (
        <div className='h-screen w-full bg-red-100 flex items-center justify-center'>
            <CustomCursor />
            <div className='h-fit w-[500px] p-3 bg-white border border-black/20 rounded-xl space-y-3'>
                <Card
                    image={'/music/morayo.jpeg'}
                    artist={'Wizkid'}
                    name={'Morayo'}
                />
                <Card
                    image={'/music/5ive.jpg'}
                    artist={'Davido'}
                    name={'5ive'}
                />
                <Card
                    image={'/music/heis.jpeg'}
                    artist={'Rema'}
                    name={'HEIS'}
                />
            </div>
        </div>
    )
}

export default CursorPlayground