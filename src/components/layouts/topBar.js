import React from 'react'
import Searchbar from '../searchBar'
import Personal from '../personal'

export default function topBar() {

    const logoImageStyle = {
        fontSize: "32px"
    }

    return (

        <div className='topbar-section'>

            <div className="logo-section">
                <p style={logoImageStyle} className='text-white'>Rhythmica</p>
            </div>

            <Searchbar />

            <Personal />

        </div>
    )
}
