import React from 'react'
import Mychannels from './myChannels'
import Shareprofile from './shareProfile'
import Profile from './Profile'

export default function personal() {
    return (
        <div className='personal-section flex justify-end items-center'>

            <Mychannels />

            <Shareprofile />

            <Profile />

        </div>
    )
}
