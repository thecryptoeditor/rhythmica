import React from 'react'
import Mychannels from './myChannels'
import Shareprofile from './shareProfile'
import Profile from './Profile'

export default function personal() {
    return (
        <div className='personal-section flex justify-between items-center'>

            <Mychannels />

            <div className='flex direction-row items-center'>
                <Shareprofile />

                <Profile />
            </div>

        </div>
    )
}
