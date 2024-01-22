import React from 'react';

export default function leftSideBar({children, props}) {
    return (
        <div className='borderlessbtn'>
            <button className={`bg-black font-semibold py-2 hover:bg-red-600 hover:text-black transition-colors ${props}`}>
                {children}
            </button>
        </div>
    )
}