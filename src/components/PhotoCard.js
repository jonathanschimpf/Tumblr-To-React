import React from 'react';
import './PhotoCard.css'; 

function PhotoCard({ image, caption, onClick }) {
  return (
    <div className="photo-card">
      <img src={image} alt={caption} className="photo" onClick={onClick} />
      <p className="caption">{caption}</p>
    </div>
  );
}

export default PhotoCard;