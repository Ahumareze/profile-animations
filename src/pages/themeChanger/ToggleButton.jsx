import React, { useState } from 'react'

function ToggleButton({handleThemeSelect}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='absolute bottom-10 right-10'>
            <div className='h-[60px] w-[60px] bg-white rounded-full shadow-md p-1' onClick={() => setIsOpen(prev => !prev)}>
                <div className='h-full w-full bg-[#ff0000] rounded-full' onClick={() => handleThemeSelect("blue")} />
            </div>
        </div>
        
    )
}

export default ToggleButton