import React from 'react';

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "url(/img/select/Next_icon.svg)", fontSize: '30px', outline: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "url(/img/select/Prev_icon.svg)", fontSize: '30px', outline: 'none' }}
      onClick={onClick}
    />
  );
}

export { SampleNextArrow, SamplePrevArrow };