import React, {useEffect, useState} from 'react';
import Login from '../components/Login.js';
import RandomGenerator from '../utils/RandomNumberGenretor.js'
// import Loading from '../layout/loading';

export default function LoginPage () {

    const submitEvent = (event) => {
        event.preventDefault();
        console.log('submit event');
    }

    const [rendomNumber, setRendomNumber] = useState(``);

    useEffect(() => {
        setRendomNumber(RandomGenerator);
    }, [])


    console.log(rendomNumber);

    return (
        <>
            <Login submitEvent={submitEvent} />
            {/* <Loading /> */}
        </>
    )

}