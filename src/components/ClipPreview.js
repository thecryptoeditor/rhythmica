import React, { useEffect } from 'react';
import ReactPlayer from 'react-player'
import instance from '../lib/axios.js'; 


function ClipPreview() {

    // const [loading, setLoading] = useState(false);

    
    const getData = async() => {

        try {

            let res = await instance.get('https://jsonplaceholder.typicode.com/todos/1')

            if(res.data.success) {
                
            }
            else {

            }

        }
        catch(err) {
            console.error(err);
        }
    }

    useEffect(() => { 
        getData();
    },[]) 

  return (
    <div>
        <ReactPlayer url='https://www.youtube.com/watch?v=0rY4PMIhflo&ab_channel=Xander' />
    </div>
  )
}

export default ClipPreview