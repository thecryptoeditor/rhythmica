//   // Function to handle the base64 to mp3 conversion and audio playback
//   export default function audioToBase64Converter(file) {

//     if (!file) {
//       console.error('No MP3 data available');
//       return;
//     }

//     // const validBase64String = file.replace(/^data:audio\/mp3;base64,/, '');

//     try {
        
//         // Convert the base64 string to binary data
//         const binaryData = atob(file);
    
//         // Create a Uint8Array from the binary data
//         const uint8Array = new Uint8Array(binaryData.length);
//         for (let i = 0; i < binaryData.length; i++) {
//           uint8Array[i] = binaryData.charCodeAt(i);
//         }
    
//         // Create a Blob from the Uint8Array
//         const blob = new Blob([uint8Array], { type: 'audio/mp3' });
    
//         // Generate a temporary URL for the Blob
//         const mp3URL = URL.createObjectURL(blob);
    
//         // Create an audio element and play the MP3
//         const audio = new Audio(mp3URL);
//         audio.play();

//     }
//     catch (e) {
//         console.error(e);
//     }
//   };