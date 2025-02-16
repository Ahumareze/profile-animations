import { FaGithub, FaGlobe } from "react-icons/fa6";

export default function Header(){
    return(
        <div className="fixed top-0 left-0 w-full bg-white flex px-[20px] md:px-[50px] py-5 border-b border-black justify-between items-center z-[1000]">
            <a href="/">
                <div className="flex items-center gap-2">
                    <img
                        src="/favicon.jpg"
                        alt=""
                        className="h-[40px] w-[40px] bg-[#f5f5f5] rounded-xl border-2 border-white shadow-md"
                    />
                    <p className="font-medium">Ifeanyi's Playground</p>
                </div>
            </a>
            <div className="flex items-center gap-5">
                <a href="https://ifeanyicodes.com" target="_blank">
                    <div className="flex items-center gap-2 px-5 py-2 bg-[#f5f5f5] hover:bg-[#eee] text-black/80 rounded-full duration-300 ease-in-out">
                        <p className="font-medium">My Portfolio</p>
                        <FaGlobe />
                    </div>
                </a>
                <a href="https://github.com/Ahumareze" target="_blank">
                    <div className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full ">
                        <p className="font-medium">My Github</p>
                        <FaGithub />
                    </div>
                </a>
            </div>
        </div>
    )
}