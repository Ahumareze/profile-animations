import gsap from "gsap"
import { useEffect } from "react"

export default function Backdrop({activeTheme}){

    useEffect(() => {
        let tl = gsap.timeline({defaults: {ease: "power1.inOut"}});

        if(activeTheme === "blue"){
            tl.to("#blue-backdrop", {
                height: '500%',
                width: '500%',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                duration: 0.5,
                borderRadius: 0
            });

            console.log("here")
        }
    }, [activeTheme])

    return(
        <div className="h-screen w-full absolute top-0 right-0 overflow-hidden">
            <div className="h-full w-full relative bg-red-500">
                <div className="h-[100px] w-[100px] absolute bottom-10 right-10 bg-blue-500 rounded-full" id="blue-backdrop" />
            </div>
        </div>
    )
}