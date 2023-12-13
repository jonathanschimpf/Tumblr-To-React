import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoCard from "./PhotoCard";
import GeneralNavigationIcon from "./GeneralNavigationIcon";
import "./TumblrToReact.css";
import { WOW } from 'wowjs';
import 'animate.css';

function Modal({ image, caption, onClose }) {
  if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={image} alt={caption} />
        <p>{caption}</p>
        <button onClick={onClose}>x</button>
      </div>
    </div>
  );
}

function TumblrToReact({ data, itemRefs }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCaption, setSelectedCaption] = useState("");

  useEffect(() => {
    const wow = new WOW({
      live: false // to prevent WOW from continuously checking for new elements on the page
    });
    wow.init();
  }, []);

  const handleImageClick = (image, caption) => {
    setSelectedImage(image);
    setSelectedCaption(caption);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedCaption("");
  };

  const handleNavigationClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <InfiniteScroll
        className="infinite-scroll-container"
        dataLength={itemRefs.current.length}
        next={() => {}}
        hasMore={false}
      >
        {data.map((item, index) => (
          <div ref={itemRefs.current[index]} key={index}>
            <PhotoCard 
              image={item.image} 
              caption={item.caption} 
              onClick={() => handleImageClick(item.image, item.caption)}
            />
            {index >= 2 && index < data.length - 1 && (
              <GeneralNavigationIcon action={handleNavigationClick} />
            )}
          </div>
        ))}
      </InfiniteScroll>
      <Modal image={selectedImage} caption={selectedCaption} onClose={handleCloseModal} />
    </>
  );
}

export default TumblrToReact;