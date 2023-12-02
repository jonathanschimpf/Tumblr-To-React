import React from 'react';
import "./GeneralNavigationIcon.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import 'animate.css';

const GeneralNavigationIcon = ({ action }) => {
  const handleClick = (e) => {
    e.stopPropagation(); 
    action(); 
  };

  return (
    <div className="general-navigation-icon-div wow animate__delay-4s fadeInUp" data-wow-offset="100">
      <FontAwesomeIcon className="general-navigation-icon" 
       onClick={handleClick} icon={faChevronUp} />
    </div>
  );
};

export default GeneralNavigationIcon;
