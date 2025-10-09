import React from 'react';


function About() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        margin: 0,
        left: 0,
        top: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.7)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: 0,
          borderRadius: 0,
          background: 'rgba(0,0,0,0.5)',
          width: '100vw',
          maxWidth: '100vw',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ fontWeight: 700, margin: 0, padding: 0 }}>About Me</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.7', textAlign: 'center', margin: 0, padding: 0 }}>
          Welcome to my art portfolio! I am passionate about photography, videography, and drawing.<br />
          Explore my work in each tab above. I love capturing moments, telling stories through video, and expressing creativity through drawing.
        </p>
      </div>
    </div>
  );
}

export default About;
