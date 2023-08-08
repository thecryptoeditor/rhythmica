import React from 'react';

export default function ClipPreview(props) {

    return (
        <div className="audio-player">
            <audio src={props.videoData} type="audio/ogg" controls />
        </div>
    )
    
}
