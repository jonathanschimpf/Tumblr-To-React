import React, { useState, forwardRef } from 'react';
import './PhotoCard.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';

// Make sure the component function is properly closed with a brace.
const PhotoCard = forwardRef(({ image, caption, onClick, index }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoaded = () => {
    setIsLoaded(true);
  };

  const scrollToTop = (event) => {
    event.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Your return statement and JSX go here.
  return (
    <div className="photo-card-wrapper" ref={ref}>
      <div className="photo-card" onClick={onClick}>
        <LazyLoadImage
          src={image}
          alt={caption}
          effect="blur"
          onLoad={handleImageLoaded}
        />
        {isLoaded && <p className="caption">{caption}</p>}
        {isLoaded && index >= 4 && (
          <div className="general-navigation-icon-div">
            <FontAwesomeIcon size="2x" className="general-navigation-icon" onClick={scrollToTop} icon={faChevronUp} />
          </div>
        )}
      </div>
    </div>
  );
}); // Ensure this closing parenthesis and semicolon are in place.

export default PhotoCard; // Export the result of forwardRef wrapping your component.
