import React from 'react';
import Button from '../components/atom/Button';
import CloseIcon from '@mui/icons-material/Close';

const AdvertisementCard = () => {
    return (
        <div className="upgradesubscription-section rounded-lg p-6 text-white">

            <div className='flex justify-between'>
                <p className="text-lg font-semibold mb-2">Check the power of Rhythmica</p>
                <button className="flex justify-end top-4 right-4">
                    <CloseIcon sx={{'fontSize': '32px'}} />
                </button>
            </div>

            <p className="mb-4">Enjoy uninterrupted music streaming with our premium subscription.</p>

            <div className='mt-16'>
                <Button props={'rounded-full px-8 py-3 self-btn filled-button'}>
                    Upgrade
                </Button>
            </div>
        </div>
    );
};

export default AdvertisementCard;
