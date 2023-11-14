import React from 'react';
import './PhotoCard.css'; 

function PhotoCard({ image, caption }) {
  return (
    <div className="photo-card">
      <img src={image} alt="" className="photo" />
      <p className="caption">{caption}</p>
    </div>
  );
}

export default PhotoCard;
