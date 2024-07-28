import React from 'react';
import posterImg from '../assets/images/protox.png'

const PlaylistCard = () => {

    const bg = {'backgroundImage': 'linear-gradient(to right, rgb(81, 62, 92), rgb(55, 101, 87))'}

    return (
        <div className="bg-gray-800 rounded-xl p-12 text-white" style={bg}>
            <div className="text-sm mb-2">69 tracks • 4 hours 37 minutes</div>
            <div className="text-2xl font-bold mb-4">Playlist of the day</div>
            <div className="rounded">
                <img
                    src={posterImg}
                    alt="Album Art"
                    className="rounded-lg w-52"
                />
            </div>
        </div>
    );
};

export default PlaylistCard;
