import React from 'react';

function ImageModal({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          borderRadius: '12px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.4)'
        }}
      />
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          background: '#fff',
          color: '#222',
          border: 'none',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          fontSize: '1.5rem',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
        }}
        aria-label="Close fullscreen"
      >
        &times;
      </button>
    </div>
  );
}

export default ImageModal;
