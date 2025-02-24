import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

function Reviews() {

    const ReviewCard = ({image, name, link}) => {
        return(
            <div className='bg-white p-2 min-w-[400px] max-w-[400px] rounded-xl'>
                <img
                    className='w-full rounded-md'
                    src={image}
                    alt={name}
                />
                <div className='w-full flex items-center p-2 bg-white hover:bg-[#f5f5f5] rounded-md gap-2'>
                    <div className='h-[30px] w-[30px] rounded-full bg-red-500' />
                    <p className='flex-1'>{name}</p>
                    <FiArrowRight />
                </div>
            </div>
        )
    }

    return (
        <div className='flex items-center justify-center flex-wrap gap-5 px-10'>
            <ReviewCard
                image={'/reviews/shatermt.jpg'}
                name={'Tsaver Shater'}
                link={'https://x.com'}
            />
            <ReviewCard
                image={'/reviews/shatermt.jpg'}
                name={'Tsaver Shater'}
                link={'https://x.com'}
            />
            <ReviewCard
                image={'/reviews/shatermt.jpg'}
                name={'Tsaver Shater'}
                link={'https://x.com'}
            />
            <ReviewCard
                image={'/reviews/shatermt.jpg'}
                name={'Tsaver Shater'}
                link={'https://x.com'}
            />
            <ReviewCard
                image={'/reviews/shatermt.jpg'}
                name={'Tsaver Shater'}
                link={'https://x.com'}
            />
        </div>
    )
}

export default Reviews