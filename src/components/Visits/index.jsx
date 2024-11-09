import React, { useState, useEffect } from 'react';
import "./styles.css";
import "../../assets/logo/logo.png"
import backgroundImage from "../../assets/bg.jpg"
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
    <div>
 <div className="relative w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">Welcome to your one stop booking for hotel</h1>
  </div>
</div>

      <div className='visit'>
      <h1 className="visit-header">Famous clicks of our customers</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Random Hotel ${index}`} style={{ width: '200px', height: '300px' }} />
          ))}
        </div>
      </div>
      
      {/* <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://picsum.photos/500/300" alt="Modern building architecture" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Visits;
