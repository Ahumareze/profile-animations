"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"

const coaches = [
    {
        name: 'REMA',
        position: 'Rave lord',
        writeUp: `Divine Ikubor (born 1 May 2000), popularly known as Rema, is a Nigerian singer-songwriter and rapper. He gained recognition with his 2019 song "Dumebi". That same year, he signed with D'Prince's record label, Jonzing World. He achieved international recognition with his 2022 single "Calm Down", which spawned a remix with American singer Selena Gomez that peaked at number three on the Billboard Hot 100. The song also led Billboard Afrobeats Songs chart for a record-setting 58 weeks.`, 
        image: "/music/rema-2.jpeg"
    },
    {
        name: 'WIZKID',
        position: 'Nigerian Entertainment Industry',
        writeUp: `Ayodeji Ibrahim Balogun (born 16 July 1990), better known as Wizkid, is a Nigerian singer and songwriter. Born in the Ojuelegba suburb of Surulere, Lagos, Wizkid is a voice in the emerging Afrobeats movement. His music is a blend of Afrobeats, afropop, R&B, afrobeat, reggae, dancehall, and pop. He began recording music at the age of 11 and released a collaborative album with the Glorious Five, a group he and a couple of his church friends formed. In 2009, Wizkid signed a record deal with Banky W's Empire Mates Entertainment (E.M.E). He rose to the limelight after releasing "Holla at Your Boy", the lead single from his debut studio album, Superstar (2011), which also spawned the singles "Tease Me/Bad Guys" and "Don't Dull".`, 
        image: "/music/wizkid-2.jpeg"
    },
];

const artists = [
    {
        name: 'TEMS',
        tagName: 'Temilade',
        image: '/music/tems.jpeg'
    },
    {
        name: 'WIZKID',
        tagName: 'Nigerian Entertainment Industry',
        image: '/music/wizkid-2.jpeg'
    },
    {
        name: 'DAVIDO',
        tagName: '001',
        image: '/music/davido.jpeg'
    },
    {
        name: 'REMA',
        tagName: 'Rave Lord',
        image: '/music/rema-2.jpeg'
    }
]

export default function Cards(){
    const [selectedCoach, setSelectedCoach] = useState(null);

    return(
        <div>
        <div className="w-full bg-[#685BFF] px-[20px] py-20 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(images/sections-coaches-backdrop.svg)`}}>
            <div className="mx-auto max-w-[1300px]">
                <p className="text-white font-utBoldonse uppercase text-center" data-aos="fade-up">Learn from Industry Leaders</p>
                <h3 className="text-center text-white font-utBoldonse text-2xl md:text-4xl uppercase leading-[170%] md:leading-[170%] mt-7" data-aos="fade-up" data-aos-delay="100">Meet the Coaches <br /> Guiding Your Journey</h3>
                <div className="max-w-[1000px] mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
                    {coaches.map((coach, index) => (
                        <CoachCard
                            name={coach.name}
                            position={coach.position}
                            image={coach.image}
                            index={index + 1}
                            isActive={selectedCoach === index+1}
                            handleClose={() => setSelectedCoach(null)}
                            handleOpen={() => setSelectedCoach(index + 1)}
                            writeUp={coach.writeUp}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>

        <div className="max-w-[940px] mx-auto grid grid-cols-2 gap-2 py-20">
            {artists.map(({
                name,
                image,
                tagName
            }, index) => (
                <MiniProfileCard
                    key={index}
                    tagName={tagName}
                    name={name}
                    image={image}
                />
            ))}
        </div>
        </div>
    )
};

const MiniProfileCard = ({image, name, tagName}) => {
    return(
        <div className="h-[400px] w-full rounded-3xl group relative">
            <img
                src={image}
                alt={name}
                className="h-full w-full object-cover filter md:grayscale group-hover:grayscale-0 transition duration-300 bg-black/20 rounded-xl"
            />
            <div className="absolute h-full w-full bottom-0 right-0 flex flex-col justify-end p-[20px]">
                <div className={`space-y-1 duration-400 delay-100 ease-in-out text-white`}>
                    <h2 className="font-extrabold uppercase text-3xl relative top-20 group-hover:top-0 duration-200 ease-in-out">{name}</h2>
                    <p className="text-base font-medium relative top-20 group-hover:top-0 duration-300 ease-in-out">{tagName}</p>
                </div>
            </div>
        </div>
    )
}

const CoachCard = ({name, position, image, index, isActive = false, handleOpen, handleClose, writeUp}) => {
        
    return(
       
            <div className="w-full h-[600px] rounded-xl relative overflow-hidden group">
                <div className="flex items-start h-full w-full bg-[#FFFBEF]">
                    <AnimatePresence mode="wait">
                        {!isActive ? (
                            <motion.div 
                                initial={{ rotate: -15, x: -300, y: -50 }}
                                animate={{ rotate: 0, x: 0, y: 0}}
                                exit={{ rotate: -45, x: -600, y: -200 }}
                                transition={{ duration: 0.3 , ease: "linear"}}
                                key={index}
                                className="w-full h-full relative"
                            >
                                <img
                                    src={image}
                                    alt={name}
                                    className="h-full w-full object-cover filter md:grayscale group-hover:grayscale-0 transition duration-300 bg-black/20 rounded-xl"
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                exit={{opacity: 0, scale: 0.8}}
                                transition={{ duration: 0.3 , ease: "linear"}}
                                className="h-full w-full bg-[#FFFBEF] text-base text-black/80 p-7 leading-[180%]"
                            >
                                {writeUp}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="h-full w-full absolute top-0 left-0 flex items-end justify-between p-[20px] bg-black/15">
                    <div className={`space-y-2 duration-400 delay-100 ease-in-out ${isActive ? 'text-black' : 'text-white'}`}>
                        <h2 className="font-extrabold uppercase text-3xl">{name}</h2>
                        <p className="text-base font-medium">{position}</p>
                    </div>
                    <div className={`h-[60px] w-[60px] rounded-full border cursor-pointer relative duration-400 delay-100 ease-in-out ${isActive ? 'text-black border-black' : 'text-white border-white'}`} onClick={() => !isActive ? handleOpen() : handleClose()}>
                        <AnimatePresence>
                            {isActive ? (
                                <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    className=""
                                    initial={{scale: 0.5, opacity: 0, rotate: 180}}
                                    animate={{scale: 1, opacity: 1, rotate: 0}}
                                    exit={{scale: 0.5, opacity: 0, rotate: 180}}
                                    transition={{duration: 0.3, ease: "easeInOut"}}
                                    key={1}
                                >
                                    <FiMinus size={25} />
                                </motion.div>
                                </div>
                            ): (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <motion.div
                                        className=""
                                        initial={{scale: 0.5, opacity: 0}}
                                        animate={{scale: 1, opacity: 1}}
                                        transition={{duration: 0.3, ease: "easeInOut"}}
                                        key={2}
                                    >
                                        <FiPlus size={25} />
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
    )
}