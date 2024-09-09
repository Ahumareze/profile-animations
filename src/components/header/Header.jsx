export default function Header(){
    return(
        <div className="h-[50px] w-full bg-blue-500 flex items-center px-[50px]">
            <h1 className="text-xl font-semibold text-white">Toshiro Kuroda</h1>
            <div className="flex-1 flex items-center justify-end gap-10 text-white font-medium">
                <p>Home</p>
                <p>Store</p>
                <p>Contact</p>
            </div>
        </div>
    )
}