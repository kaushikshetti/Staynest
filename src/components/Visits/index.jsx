import React, { useState, useEffect } from 'react';
import "./styles.css"

const Visits = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = [];
        for (let i = 0; i < 7; i++) {
          // Lorem Picsum provides random images without requiring an API key
          imageUrls.push(`https://picsum.photos/200/300?random=${Math.random()}`);
        }
        setImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='visit'>
      <h1>Famous clicks of our customers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Random Hotel ${index}`} style={{ width: '200px', height: '300px' }} />
        ))}
      </div>
    </div>
  );
};

export default Visits;
