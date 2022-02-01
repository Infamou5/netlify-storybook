import React from 'react';
import '../../index.css';
import './aboutus.style.css';
import aboutImage from '../../assets/images/image26.png';

function index() {
  return (
    <div className="aboutus-content-container">
      <h1
        style={{
          fontFamily: 'Roboto',
          fontSize: '24px',
          lineHeight: '28px',
          margin: '2rem',
        }}
      >
        {' '}
        About us{' '}
      </h1>
      <p
        style={{
          fontFamily: 'DancingScript',
          fontSize: '24px',
          marginTop: '2rem',
          paddingInline: '1rem',
          textAlign: 'center',
        }}
      >
        We at{' '}
        <span style={{ color: '#5EA370', fontFamily: 'DancingScript' }}>
          The Green Store
        </span>{' '}
        pride ourselves on being able to offer you the biggest choice of plants.
        A good garden center can give you several plant varieties to choose
        from. If you’re worried about all this choice. We can help it narrow it
        dowwn for you.
      </p>
      <img
        className="aboutus-image"
        src={aboutImage}
        alt="aboutImage"
        style={{ margin: '3rem' }}
      />
    </div>
  );
}

export default index;
