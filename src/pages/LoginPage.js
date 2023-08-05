import React from 'react';
import Login from '../components/Login.js';
// import Loading from '../layout/loading';

export default function LoginPage () {

    const submitEvent = () => {
        console.log('submit event');
    }

    return (
        <>
            <Login onSubmit={submitEvent} />
            {/* <Loading /> */}
        </>
    )

}