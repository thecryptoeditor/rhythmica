import React from 'react';
import PlaylistMenuItem from './PlaylistMenuItem';

const playlists = [
    { id: 1, name: 'Workout at the gym', tracks: '29 tracks • 2h 15m', date: '23 June, 2023' },
    { id: 2, name: 'Techno mix 2023', tracks: '29 tracks • 2h 15m', date: '23 June, 2023' },
    { id: 3, name: 'Hard rock 2023', tracks: '29 tracks • 2h 15m', date: '23 June, 2023' }
];

const PlaylistMenu = () => {
    return (
        <nav className="space-y-1">
            {playlists.map((playlist) => (
                <PlaylistMenuItem
                    key={playlist.id}
                    name={playlist.name}
                    tracks={playlist.tracks}
                    date={playlist.date}
                />
            ))}
        </nav>
    );
};

export default PlaylistMenu;
