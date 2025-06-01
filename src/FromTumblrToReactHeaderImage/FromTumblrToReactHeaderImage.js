import React from 'react';
import './FromTumblrToReact_Header-Image.css';
import localImage from '../From-Tumblr-To-React_Open-Graph-Image/FromTumblrToReact.png'; 

function FromTumblrToReact_HeaderImage() {
  return (
    <div className="FromTumblrToReact_Header-ImageDiv">
      <a href="https://github.com/jonathanschimpf/Tumblr-To-React" target="_blank" rel="noreferrer">
        <img src={localImage} alt="Header Visual Representation" className="FromTumblrToReact_Header-img" />
      </a>
    </div>
  );
}

export default FromTumblrToReact_HeaderImage;

