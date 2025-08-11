import { FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi";

export default function Header(){
    return(
        <div className='fixed top-0 left-0 h-[70px] w-full bg-white shadow-md flex items-center justify-between px-[20px] md:px-[50px] z-[1000]'>
            <div>
                <img 
                    className="h-[22px]"
                    src="nike-logo.svg"
                />
            </div>
            <div className="flex items-center justify-center gap-7 font-semibold">
                <p className="cursor-pointer">Men</p>
                <p className="cursor-pointer">Women</p>
                <p className="cursor-pointer">Kids</p>
                <p className="cursor-pointer">Jordan</p>
                <p className="cursor-pointer">Sports</p>
                <p className="cursor-pointer">Sale</p>
            </div>
            <div className="flex items-center gap-7">
                <div className="flex items-center gap-2 px-2 h-[40px] w-[150px] rounded-full bg-[#f1f1f1]">
                    <FiSearch size={20} className="opacity-70" />
                    <p className="text-black/50">Search</p>
                </div>
                <FiHeart size={22} className="opacity-80" />
                <FiShoppingBag size={22} className="opacity-80" />
            </div>
        </div>
    )
}