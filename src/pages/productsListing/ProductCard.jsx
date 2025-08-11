import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function ProductCard({ img, name, amount }) {
    const { ref, inView } = useInView({ triggerOnce: true })
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        // Duration between 0.2s and 0.5s
        setDuration(Math.random() * (0.8 - 0.4) + 0.4)
    }, [])

    return (
        <div className="w-full h-fit rounded-md flex flex-col items-start justify-center">
            <motion.img
                ref={ref}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration }}
                className="h-[300px] w-full object-cover"
                src={`/shirts/${img}`}
                alt=""
            />
            <p className='font-medium mt-3'>{name}</p>
            <p className='font-medium mt-1'>${amount}</p>
        </div>
    )
}
