import React, { useState } from "react";
import "./HoverStrangeObservationsReveal.css";

const HoverStrangeObservationsReveal = () => {
  const [hovered, setHovered] = useState(false);
  const isTouchDevice =
    typeof window !== "undefined" && "ontouchstart" in window;

  const toggleHover = () => {
    if (isTouchDevice) {
      setHovered((prev) => !prev);
    }
  };

  return (
    <div
      className="hover-wrapper"
      onMouseEnter={() => !isTouchDevice && setHovered(true)}
      onMouseLeave={() => !isTouchDevice && setHovered(false)}
      onClick={toggleHover} // SINGLE TAP = TOGGLE
    >
      <div className="hover-inner">
        <p className={`hover-name ${hovered ? "fade-out" : "fade-in"}`}>
          Jonathan Schimpf
        </p>
        <img
          src="/images/images-subdirectory_3/16174396485.jpg"
          alt=""
          role="presentation"
          className={`hover-image ${hovered ? "fade-in" : "fade-out"}`}
        />
      </div>
    </div>
  );
};

export default HoverStrangeObservationsReveal;
