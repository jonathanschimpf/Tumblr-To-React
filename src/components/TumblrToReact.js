import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PhotoCard from "./PhotoCard";
import "./TumblrToReact.css";
import { WOW } from "wowjs";
import "animate.css";

function Modal({ image, caption, onClose }) {
  if (!image) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
      live: false, // PREVENT WOW FROM CONTINUOUSLYCHECKING FOR NEW ELEMENT
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

  return (
    <>
      <InfiniteScroll
        className="infinite-scroll-container"
        dataLength={data.length}
        next={() => {}}
        hasMore={false}
        loader={<h4>Loading...</h4>}
      >
        {data.map((item, index) => (
          <PhotoCard
            key={item.id} // Use a unique identifier from your data as the key
            ref={itemRefs[index]} // Assign the ref here
            image={item.image}
            caption={item.caption}
            onClick={() => handleImageClick(item.image, item.caption)}
            index={index} // PASS THE INDEX TO NOTE WHAT # PHOTO IT IS
          />
        ))}
      </InfiniteScroll>
      <Modal
        image={selectedImage}
        caption={selectedCaption}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default TumblrToReact;
