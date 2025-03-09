import React, { useState } from 'react';
// import { IonToggle } from '@ionic/react';

const imageCover = 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg'

function DynamicIsland({handleClick, isDarkMode}) {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className={`fixed top-[15px] left-1/2 -translate-x-1/2 h-fit w-[500px] px-3 py-2  border ${isDarkMode ? 'bg-[#1a1a1a] border-white/10' : 'bg-black border-black'} rounded-3xl duration-300 ease-in-out`}>
            <div className='flex items-center justify-between h-[40px] w-full'>
                <div className='flex w-fit h-full items-center gap-3 text-white px-2' onClick={() => setShowDetails(prev => !prev)}>
                    <img 
                        className='h-full w-[50px] bg-red-500 rounded-md' 
                        src={imageCover}
                        alt='Abbey road'
                    />
                    <p>Currently listening</p>
                </div>
                <div className='h-full w-[100px] rounded-full bg-orange-500 cursor-pointer' onClick={handleClick}>
                    {/* <IonToggle aria-label="Success toggle" color="success" checked={true}></IonToggle> */}
                </div>
            </div>
            {showDetails && (
                <div className='h-[200px] w-full bg-red-500 mt-3'>
                    
                </div>
            )}
        </div>
    )
}

export default DynamicIsland