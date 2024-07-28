import React from 'react';
import { IconButton, Slider } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import coverImg from '../../assets/images/proto.png'

const MusicPlayer = () => {
    return (
        <div className="bottom-player text-white flex items-center">
            <img
                src={coverImg}
                alt="Album Cover"
                className="h-14 w-14 mr-4"
            />

            <div className="flex flex-col mr-4">
                <span className="font-medium">Welcome To Horrorwood</span>
                <span className="text-xs text-gray-400">Ice Nine Kills</span>
            </div>

            <div className="flex items-center mr-4">
                <IconButton aria-label="previous">
                    <SkipPreviousIcon sx={{'color': 'white'}} />
                </IconButton>
                <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{'color': 'white'}} />
                </IconButton>
                <IconButton aria-label="next">
                    <SkipNextIcon sx={{'color': 'white'}} />
                </IconButton>
                <IconButton aria-label="favorite">
                    <FavoriteIcon sx={{'color': 'white'}} />
                </IconButton>
            </div>

            <Slider
                aria-label="song progress"
                size="small"
                value={30}
                min={0}
                max={100}
                className="mx-4"
            />

            <div className="flex items-center">
                <span className="text-xs mr-4 w-24">1:55 / 3:47</span>
                <IconButton aria-label="volume">
                    <VolumeUpIcon sx={{'color': 'white'}} />
                </IconButton>
            </div>
            <div className="ml-auto flex items-center">
                <IconButton aria-label="shuffle">
                    <ShuffleIcon sx={{'color': 'white'}} />
                </IconButton>
                <IconButton aria-label="repeat">
                    <RepeatIcon sx={{'color': 'white'}} />
                </IconButton>
                <IconButton aria-label="queue">
                    <QueueMusicIcon sx={{'color': 'white'}} />
                </IconButton>
                <IconButton aria-label="fullscreen">
                    <FullscreenIcon sx={{'color': 'white'}} />
                </IconButton>
            </div>
        </div>
    );
};

export default MusicPlayer;
