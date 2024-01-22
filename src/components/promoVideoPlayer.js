import React from 'react';
import { IconButton } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Player = () => {
    return (
        <div className="bg-gray-800 rounded-lg p-4 text-white flex flex-col justify-between" style={{Width: '70%'}}>
            <div className="flex justify-between items-center">
                <div>
                    <div className="text-sm">Brand of Sacrifice • April 2023</div>
                    <div className="text-2xl font-bold">Between Death and Dreams</div>
                </div>
                <IconButton aria-label="like">
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="more">
                    <MoreVertIcon />
                </IconButton>
            </div>

            <div className="flex justify-center items-center">
                <IconButton aria-label="play" size="large">
                    <PlayCircleOutlineIcon fontSize="inherit" />
                </IconButton>
            </div>

            <div>
                {/* Placeholder for the progress bar */}
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-2">
                    <span>0:00</span>
                    <span>4:12</span>
                </div>
            </div>
        </div>
    );
};

export default Player;
