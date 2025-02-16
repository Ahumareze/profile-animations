import { useState, useRef } from 'react';

export default function DrinkItem({title, image, bg, index, pieces}){

    const id = 'item-' + index

    return(
        <div className='h-[500px] min-w-[650px] max-w-[650px] relative overflow-hidden group' id={id}>
            <div className={`h-[400px] w-full rounded-2xl mt-[100px] ${bg}`}>
                <img
                    src={image}
                    alt=''
                    className='h-[120%] mx-auto relative top-[-20%] group-hover:rotate-[-4deg] group-hover:scale-[1.1] duration-300 ease-in-out'
                />
            </div>
            <div className='h-full w-full absolute top-0 left-0 p-5 items-start flex flex-col'>
                <img
                    src={pieces}
                    alt=''
                />
                <h1 className='text-4xl uppercase text-white font-bold'>{title}</h1>
            </div>
        </div>
    )
}