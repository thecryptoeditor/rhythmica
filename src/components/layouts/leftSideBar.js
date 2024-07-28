import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Borderlessbtn from '../atom/BorderlessButton'


import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import StreamIcon from '@mui/icons-material/Stream';
import AddIcon from '@mui/icons-material/Add';

const leftSideBar = () => {

    const menuItems = [
        { text: 'Feed', icon: <StreamIcon sx={{ color: "white" }} /> },
        { text: 'Playlists', icon: <QueueMusicOutlinedIcon sx={{ color: "white" }} /> },
        { text: 'Statistics', icon: <EqualizerOutlinedIcon sx={{ color: "white" }} /> }
    ];

    const myMusic = [
        { text: 'Favourites', icon: <FavoriteBorderOutlinedIcon sx={{ color: "white" }} /> },
        { text: 'Listen Later', icon: <WatchLaterOutlinedIcon sx={{ color: "white" }} /> },
        { text: 'History', icon: <HistoryOutlinedIcon sx={{ color: "white" }} /> },
        { text: 'Podcasts', icon: <PodcastsOutlinedIcon sx={{ color: "white" }} /> }
    ];

    const playlistItems = [
        { text: 'Metalcore', color: 'bg-red-500' },
        { text: 'Electro', color: 'bg-green-500' },
        { text: 'Funk', color: 'bg-yellow-500' },
        { text: 'Disco', color: 'bg-purple-500' },
    ];

    return (
        <div className="leftsidebar-section text-white">

            <List>
                {menuItems.map((item, index) => (
                    <ListItem type="button" key={index} className="hover:bg-gray-700">
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

            <div className='mt-2 mb-2'>
                <Divider className="bg-gray-900" />
            </div>

            <p className='ml-4' style={{color: 'rgb(130, 130, 130)'}}>YOUR MUSIC</p>

            <List>
                {myMusic.map((item, index) => (
                    <ListItem type="button" key={index} className="hover:bg-gray-700">
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

            <div className='mt-2 mb-2'>
                <Divider className="bg-gray-900" />
            </div>

            <p className='ml-4' style={{color: 'rgb(130, 130, 130)'}}>YOUR PLAYLISTS</p>

            <List>
                {playlistItems.map((item, index) => (
                    <ListItem type="button" key={index} className={`hover:bg-gray-700`}>
                        <ListItemIcon>
                            <div className={`w-2 h-2 m-2 rounded-full ${item.color}`} />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>

            <div className="px-4 py-2">
                <Borderlessbtn props={'theme-color'}>
                    Create new playlist
                    <AddIcon></AddIcon>
                </Borderlessbtn>
            </div>
        </div>
    );
};

export default leftSideBar;
