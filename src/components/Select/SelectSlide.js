import React from 'react';

function SelectSlide({ src, alt, text1, text2 }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '400px', marginRight: '10px', outline: 'none' }}>
      <img src={src} alt={alt} style={{ width: '100%', paddingRight: '20px' }} />
      <div className="SelectMainText" style={{ textAlign: 'left' }}>
        <p>{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
}

export default SelectSlide;