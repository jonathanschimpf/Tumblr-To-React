import React from "react";
import "./FromTumblrToReactHeaderImage.css";
import localImage from "../FromTumblrToReactOpenGraphImage/FromTumblrToReact.png";

function FromTumblrToReactHeaderImage() {
  return (
    <div className="FromTumblrToReactHeaderImageDiv">
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

export default FromTumblrToReactHeaderImage;
