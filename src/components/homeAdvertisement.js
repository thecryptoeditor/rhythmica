import React from 'react';
import PlaylistCard from './PlaylistCard';
import VideoPlayerAd from './promoVideoPlayer';

const Advertisement = () => {
    return (
        <div className="flex justify-between items-center ">
            <PlaylistCard className="w-82" style={{maxWidth: '30%'}} />
            <VideoPlayerAd />
        </div>
    );
};

export default Advertisement;