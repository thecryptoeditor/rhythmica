import React from 'react'
import Searchbar from '../searchBar'

export default function topBar() {

    const logoImageStyle = {
        fontSize: "32px",
        padding: "10px"
    }

    return (

        <div className='topbar-section'>

            <div className="logo-section">
                <p style={logoImageStyle} className='text-white'>SpoofMusica</p>
            </div>

            <Searchbar />



        </div>
    )
}
