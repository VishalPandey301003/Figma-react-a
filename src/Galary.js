import React, { useState } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const addImage = () => setImages([...images, 'https://via.placeholder.com/150']);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        {images.map((img, index) => (
          <img key={index} src={img} alt="Gallery" />
        ))}
      </div>
      <button onClick={addImage}>+ Add Image</button>
    </div>
  );
};

export default Gallery;
