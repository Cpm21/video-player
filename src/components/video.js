
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPlayerComponent = () => {
    const [videoData, setVideoData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/files/2', { responseType: 'arraybuffer' })
            .then(response => {
                const blob = new Blob([response.data], { type: 'video/mp4' });
                const objectURL = URL.createObjectURL(blob);
                setVideoData(objectURL);
            })
            .catch(error => console.error('Error fetching video:', error));
    }, []);

    return (
        <div>
            <h2>video</h2>
            {videoData && (
                <video controls width="640" height="360">
                    <source src={videoData} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
};

export default VideoPlayerComponent;
