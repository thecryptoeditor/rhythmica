import React from 'react';
import {Button} from '@mui/material'


const DynamicButton = ({ children, onClick, props }) => {
    
    return (
        <Button className={props} onClick={onClick}>
            {children}
        </Button>
    );
};

export default DynamicButton;