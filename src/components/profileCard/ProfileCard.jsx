import gsap from "gsap/all"
import { useEffect } from "react";

import markPhoto from '../../assets/mark-profile.jpg';

export default function ProfileCard({
    image,
    hide,
    index,
    handleClick
}){

    useEffect(() => {
        let tl = gsap.timeline();

        function getRandomNumber() {
            return 1.5 + (index/10)
        }

        tl.to(`#profile-card-overlay-${index}`, {
            height: hide ? 0 : 400,
            flex: 0,
            duration: getRandomNumber()
        })
    }, [hide])

    return(
        <div 
            className={`relative  duration-300 ease-in ${hide ? '' : 'cursor-pointer hover:scale-[1.03]'}`} 
            onClick={() => {
                if(hide) return

                handleClick()
            }}
        >
            <div className="min-w-[300px] bg-white rounded-xl overflow-hidden">
                <img 
                    className="h-[250px] w-full bg-blue-600 object-cover"
                    src={image}
                />
                <div className="flex items-center gap-2 py-[10px] px-[20px]">
                    <img src={markPhoto} className="h-[30px] w-[30px] rounded-full object-cover" />
                    <h2>Mark Rise</h2>
                </div>
            </div>
            <div className="absolute h-full w-full top-0 left-0 flex flex-col">
                <div className="flex-1 bg-blue-500" />
                <div className="h-[0px] w-full" id={`profile-card-overlay-${index}`} />
                <div className="flex-1 bg-blue-500" />
            </div>
        </div>
    )
}