import React, {useEffect} from 'react'
import Topbar from "../../components/layouts/topBar"
import Body from "./homeBody"

export default function Home(props) {

    // useEffect(() => document.title = props.title, [props.title]);

    return (
        <>
            <Topbar />
            <Body />
            {/* <Bottombar /> */}
        </>
    )
}
