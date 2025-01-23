import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Test() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://api.slingacademy.com/v1/sample-data/photos')
            .then(res => {
                setPosts(res.data.photos);})
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div id="image-container">
                {posts.map(image => (
                    <img 
                        key={image.id} // Use a unique key for each image
                        src={image.url} // Use the correct property for the URL
                       alt={image.title}// Use the title as the alt text
                        style={{ width: '100px', height: 'auto', margin: '5px' }} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Test;
