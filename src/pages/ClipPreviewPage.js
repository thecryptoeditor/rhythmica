import React, {useEffect, useState} from 'react'
import ClipPreview from '../components/ClipPreview.js';
// import audioToBase64Converter from '../utils/Base64ToVideoConverter.js'
// import Axios from '../lib/AxiosConfig.js'; 

export default function ClipPreviewPage() {

    // const getData = async() => {

    //     try {

    //         let res = await Axios.get('https://jsonplaceholder.typicode.com/todos/1')

    //         if(res.data.success) {
                
    //         }
    //         else {

    //         }

    //     }
    //     catch(err) {
    //         console.error(err);
    //     }
    // }

    // useEffect(() => { 
    //     getData();
    // },[]) 


    const [base64, base64Response] = useState("");

    useEffect(() => {
      fetch('../../base64.txt')
        .then(response => response.text())
        .then(data => {
          base64Response(data);
        });
    }, []);


  return (
    <div>
        <ClipPreview videoData={base64} />
    </div>
  )
}
