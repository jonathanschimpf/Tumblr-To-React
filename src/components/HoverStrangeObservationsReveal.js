import React, { useState } from "react";
import "./HoverStrangeObservationsReveal.css";

const HoverStrangeObservationsReveal = () => {
  const [hovered, setHovered] = useState(false);

  const toggleHover = () => setHovered((prev) => !prev);

  return (
    <div
      className="hover-wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={toggleHover} // ✅ triggers on tap as well
    >
      <div className="hover-inner">
        <p className={`hover-name ${hovered ? "fade-out" : "fade-in"}`}>
          Jonathan Schimpf
        </p>
        <img
          src="/images/images-subdirectory_3/16174396485.jpg"
          alt=""
          className={`hover-image ${hovered ? "fade-in" : "fade-out"}`}
          aria-hidden={!hovered}
        />
      </div>
    </div>
  );
};

export default HoverStrangeObservationsReveal;
