import React from 'react';

const NavigationMenu = () => {

    const featurePlayList = ['Playlists', 'Artists', 'Albums', 'Streams', "Friends' playlists"];

    return (
        <div className="flex justify-left text-gray-400 pt-4">

            {
                featurePlayList.map((item, index) => {
                    return <span className="hover:text-white cursor-pointer pr-12" key={index}>{item}</span>
                })
            }
            
        </div>
    );
};

export default NavigationMenu;
