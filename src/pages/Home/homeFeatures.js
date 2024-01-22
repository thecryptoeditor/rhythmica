import React from 'react';
import Advertisement from '../../components/homeAdvertisement.js';
import FeaturedPlayList from '../../components/FeaturedPlayList.js';
import UpgradeSubscription from '../../components/UpgradeSubscription.js';

const homeFeatures = () => {
    return (
        <div className='homefeature-section p-2'>

            <Advertisement />

            <FeaturedPlayList />

            <UpgradeSubscription />

        </div>
    );
};

export default homeFeatures;
