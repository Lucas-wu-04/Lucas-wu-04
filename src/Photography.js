import React, { useState } from 'react';
import ImageModal from './ImageModal';

function Photography() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
      alt: "Photography 1"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Photography 2"
    }
  ];

  const [modalImg, setModalImg] = useState(null);

  return (
    <div>
      <h1>Photography</h1>
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

export default Photography;
