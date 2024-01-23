import React, { useState } from 'react';
import './PhotoCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function PhotoCard({ image, caption, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="photo-card" onClick={onClick}>
      <LazyLoadImage
        src={image}
        alt={caption}
        effect="blur"
        onLoad={() => setIsLoaded(true)} // Use onLoad instead of afterLoad
      />
      {isLoaded && <p className="caption">{caption}</p>}
    </div>
  );
}

export default PhotoCard;
