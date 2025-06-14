import React, { useState } from "react";
import "./HoverStrangeObservationsReveal.css";

const HoverStrangeObservationsReveal = () => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered(!hovered);
  const activateHover = () => setHovered(true);
  const deactivateHover = () => setHovered(false);

  return (
    <div
      className="hover-wrapper"
      onMouseEnter={activateHover}
      onMouseLeave={deactivateHover}
      onTouchStart={toggleHover}
    >
      <div className="hover-inner">
        <p className={`hover-name ${hovered ? "fade-out" : "fade-in"}`}>
          Jonathan Schimpf
        </p>
        <img
          src="/images/images-subdirectory_3/16174396485.jpg"
          alt="Strange Observations Title Image"
          className={`hover-image ${hovered ? "fade-in" : "fade-out"}`}
        />
      </div>
    </div>
  );
};

export default HoverStrangeObservationsReveal;
