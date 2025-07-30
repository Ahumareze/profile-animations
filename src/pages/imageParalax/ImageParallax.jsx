import React from 'react'
import LoaderContainer from '../../container/loader/LoaderContainer'
import Section from './components/Section'

function ImageParallax() {
    return (
        <LoaderContainer backdrop={'bg-white'}>
            <div className='bg-red-100'>
                <div className='h-[900px]' />
                <div className='min-h-screen w-full my-[200px] space-y-[200px] px-[20px] md:px-[50px]'>
                    <Section
                        imageUrl={'images/model-1.jpg'}
                    />
                    <Section
                        imageUrl={'images/model-2.webp'}
                        isReverse
                    />
                </div>
            </div>
        </LoaderContainer>
    )
}

export default ImageParallax