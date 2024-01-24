import React from 'react'
import Button from './atom/Button.js'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function myChannels() {

    const handleClick = () => { 
        console.log(`handleClick`);
    }

    return (
        <div className='channels'>
            <Button variant="outlined" props={'border-button self-btn'} onClick={handleClick}>
                <p>My channels</p>
                <span>
                    <ChevronRightIcon />
                </span>
            </Button>
        </div>
    )
}
