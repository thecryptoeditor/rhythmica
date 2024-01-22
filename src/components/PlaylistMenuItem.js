import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import imgProto from '../assets/images/proto.png'

const PlaylistMenuItem = ({ name, tracks, date }) => {
    return (
        <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
                <img
                    className="h-10 w-10 rounded-lg"
                    src={imgProto}
                    alt="Playlist cover"
                />
                <div className="ml-3">
                    <p className="text-sm font-medium text-white">{name}</p>
                </div>
            </div>

            <div className="ml-3">
                <p className="text-xs text-gray-400">{tracks}</p>
            </div>
            
            <div className="flex items-center">
                <p className="text-xs text-gray-400 mr-4">{date}</p>
                <PlayArrowIcon className="text-gray-400 hover:text-white cursor-pointer" />
                <MoreVertIcon className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
        </div>
    );
};

export default PlaylistMenuItem;
