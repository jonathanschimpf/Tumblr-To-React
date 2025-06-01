import React from "react";
import "./FromTumblrToReactHeaderImg.css";
import localImage from "../FromTumblrToReactOpenGraphImage/FromTumblrToReact.png";

function FromTumblrToReactHeaderImg() {
  return (
    <div className="FromTumblrToReactHeaderImgDiv">
      <a
        href="https://github.com/jonathanschimpf/Tumblr-To-React"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={localImage}
          alt="Header Visual Representation"
          className="FromTumblrToReactHeaderImg"
        />
      </a>
    </div>
  );
}

export default FromTumblrToReactHeaderImg;
