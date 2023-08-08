import React, { useEffect, useState } from "react";
import ClipPreview from "../components/ClipPreview.js";
import Feedback from "./FeedbackPage.js";
// import audioToBase64Converter from '../utils/Base64ToVideoConverter.js'
import Axios from '../lib/AxiosConfig.js';

export default function ClipPreviewPage() {
    
    const [base64, base64Response] = useState("");
    
    // const getData = async() => {

    //     try {

    //         let res = await Axios.get('https://jsonplaceholder.typicode.com/todos/1')

    //         console.log('res', res);

    //         if(res.data.success) {

    //         }
    //         else {

    //         }

    //     }
    //     catch(err) {
    //         console.error(err);
    //     }
    // }

    
    useEffect(() => {

        // Get data API call
        // getData();
        
        // fetching base64 sample file from public folder
        fetch("../../base64.txt")
        .then((response) => response.text())
        .then((data) => {
            base64Response(data);
        });
        
    }, []);
    
    return (
        <div>
            <ClipPreview videoData={base64} />

            <Feedback />
        </div>
    );
}
