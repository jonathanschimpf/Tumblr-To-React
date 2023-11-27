import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoCard from "./PhotoCard";
import "./TumblrToReact.css";

// Modal component
function Modal({ image, caption, onClose }) {
  if (!image) return null; // Don't render the modal if there's no image

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

  // Handler for when an image is clicked
  const handleImageClick = (image, caption) => {
    setSelectedImage(image);
    setSelectedCaption(caption);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedCaption("");
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
          <div
            ref={itemRefs.current[index]}
            key={index}
            onClick={() => handleImageClick(item.image, item.caption)}
            style={{ cursor: "pointer" }} // Make it obvious that the images are clickable
          >
            <PhotoCard image={item.image} caption={item.caption} />
          </div>
        ))}
      </InfiniteScroll>
      <Modal image={selectedImage} caption={selectedCaption} onClose={handleCloseModal} />
    </>
  );
}

export default TumblrToReact;
