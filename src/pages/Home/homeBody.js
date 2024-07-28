import React from 'react';
import Leftsidebar from '../../components/layouts/leftSideBar';
import Rightsidebar from '../../components/layouts/rightSideBar';
import Homefeatures from './homeFeatures';

export default function Body() {
    return (
        <div className='home-body flex mt-3'>
            <Leftsidebar />
            <Homefeatures />
            <Rightsidebar />
        </div>
    )
}
