import React, { useState } from 'react';
import ImageModal from './ImageModal';

function Drawing() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      alt: "Drawing 1"
    },
    {
      src: "https://images.unsplash.com/photo-1465101178521-c1a4c8a0a8b7",
      alt: "Drawing 2"
    }
  ];

  const [modalImg, setModalImg] = useState(null);

  return (
    <div>
      <h1>Drawing</h1>
      <div className="gallery">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            style={{ cursor: 'pointer' }}
            onClick={() => setModalImg(img)}
          />
        ))}
      </div>
      <ImageModal
        src={modalImg?.src}
        alt={modalImg?.alt}
        onClose={() => setModalImg(null)}
      />
    </div>
  );
}

export default Drawing;
