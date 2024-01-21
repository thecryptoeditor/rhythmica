import React from 'react'
import Button from './atom/Button.js'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function myChannels() {

    const handleClick = () => { 
        console.log(`handleClick`);
    }

    return (
        <div className='channels'>
            <Button props={'my-channel-button'} onClick={handleClick}>
                My channel
                <span className='ml-1.5'>
                    <ChevronRightIcon />
                </span>
            </Button>
        </div>
    )
}
