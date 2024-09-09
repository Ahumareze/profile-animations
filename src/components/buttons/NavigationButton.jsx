export default function NavigationButton({children, onClick}){
    return(
        <div className="w-[50px] h-[50px] rounded-full bg-blue-400 border-2 border-white text-white text-2xl flex items-center justify-center cursor-pointer" onClick={onClick}>
            {/* {left ? <IoArrowBackSharp /> : <IoArrowForward /> } */}
            {children}
        </div>
    )
}