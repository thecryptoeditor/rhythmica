// Assuming you have installed tailwindcss and @mui/material with npm or yarn
import React from 'react';
import { IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import profileImg from '../../assets/images/proto.png'

const releases = [
    { id: 1, title: 'Calamity', artist: 'Annisokay', year: '2023' },
    { id: 2, title: 'Last Resort (Reimagined)', artist: 'Falling in Reverse', year: '2023' },
    // ...other releases
];

const songs = [
    { id: 1, title: 'Blood Orange', artist: 'Berried Alive' },
    { id: 2, title: 'Soul Decay', artist: 'Make Them Suffer' },
    { id: 3, title: 'A Little Bit Off', artist: 'Five Finger Death Punch' }
];

const artists = [
    { id: 1, name: 'Ice Nine Kills', subscribers: '432k' },
    { id: 2, name: 'Bloodywood', subscribers: '31k' },
    { id: 3, name: 'Bad Omens', subscribers: '183k' },
    // ...other artists
];

const NewReleases = () => (
    <div className='newreleases-section mb-14'>
        <div className='flex justify-between items-center mb-4'>
            <p style={{color: 'rgb(130, 130, 130)'}}>NEW RELEASES</p>
            <span className="text-gray-400 text-sm theme-color">See all</span>
        </div>
        {releases.map((release) => (
            <div key={release.id} className="flex items-center mb-4">
                <div>
                    <img className='w-14 rounded-lg ' src={profileImg} alt="" />
                </div>
                <div className="flex flex-col ml-8">
                    <span className="text-white">{release.title}</span>
                    <span className="text-gray-400 text-sm">{release.artist} · {release.year}</span>
                </div>
            </div>
        ))}
    </div>
);

const FrequentListens = () => (
    <div className='listen-more-often-section mb-14'>
        <h2 className="mb-4" style={{color: 'rgb(130, 130, 130)'}}>LISTEN MORE OFTEN</h2>
        {songs.map((song) => (
            <div key={song.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div>
                        <img className='w-14 rounded-lg ' src={profileImg} alt="" />
                    </div>
                    <div className="flex flex-col ml-8">
                        <span className="text-white">{song.title}</span>
                        <span className="text-gray-400 text-sm">{song.artist}</span>
                    </div>
                </div>

                <div className='flex direction-row'>
                    <IconButton>
                        <FavoriteIcon sx={{ color: "#ef333f" }} />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon sx={{ color: "white" }} />
                    </IconButton>
                </div>
            </div>
        ))}
    </div>
);

const FavouriteArtists = () => (
    <div className='favourite-artists-section mb-14'>
        <div className='flex justify-between items-center mb-4'>
            <p style={{color: 'rgb(130, 130, 130)'}}>FAVOURITE ARTISTS</p>
            <span className="text-gray-400 text-sm theme-color">See all</span>
        </div>
        {artists.map((artist, index) => (
            <div key={artist.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <span className="text-white text-3xl mr-4">{index + 1}</span>
                    <div className="flex flex-col">
                        <span className="text-white">{artist.name}</span>
                        <span className="text-gray-400 text-sm">{artist.subscribers} subscribers</span>
                    </div>
                </div>
                <IconButton>
                    <ArrowForwardIosIcon sx={{ color: "white", fontSize: 15 }} />
                </IconButton>
            </div>
        ))}
    </div>
);

const Rightsidebar = () => {
    return (
        <div className="rightsidebar-section p-4">
            <NewReleases />
            <FrequentListens />
            <FavouriteArtists />
        </div>
    );
};

export default Rightsidebar;
