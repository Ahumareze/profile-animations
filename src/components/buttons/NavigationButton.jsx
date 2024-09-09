import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

export default function NavigationButton({left, onClick}){
    return(
        <div className="w-[50px] h-[50px] rounded-full border-2 border-white text-white text-2xl flex items-center justify-center cursor-pointer" onClick={onClick}>
            {left ? <IoArrowBackSharp /> : <IoArrowForward /> }
        </div>
    )
}