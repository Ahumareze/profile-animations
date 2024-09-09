import gsap from "gsap/all"
import { useEffect } from "react"

export default function ProfileCard({
    image,
    hide,
    index
}){

    useEffect(() => {
        let tl = gsap.timeline();

        function getRandomNumber() {
            return 1.5 + (index/10)
        }

        tl.to(`#profile-card-overlay-${index}`, {
            height: 400,
            flex: 0,
            duration: getRandomNumber()
        })
    }, [])

    return(
        <div className="relative">
            <div className="min-w-[300px] bg-white rounded-xl overflow-hidden">
                <img 
                    className="h-[250px] w-full bg-blue-600 object-cover"
                    src={image}
                />
                <div className="flex items-center gap-2 py-[10px] px-[20px]">
                    <div />
                    <h2>Peter Jury</h2>
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