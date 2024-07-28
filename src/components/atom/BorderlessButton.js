import React from 'react';

export default function leftSideBar({children, props}) {
    return (
        <div className='borderlessbtn'>
            <button className={`font-semibold py-2 hover:text-white transition-colors ${props}`}>
                {children}
            </button>
        </div>
    )
}