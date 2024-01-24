import React from 'react';
import NavigationMenu from './NavigationMenu';
import PlaylistMenu from './PlaylistMenu';

const FeaturedPlayLists = () => {
    return (
        <div className="space-y-6 py-4 px-2 inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <NavigationMenu />
            <PlaylistMenu />
        </div>
    );
};

export default FeaturedPlayLists;


