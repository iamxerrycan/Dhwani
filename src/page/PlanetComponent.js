import React, { useState } from "react";
import "./PlanetComponent.css";

const PlanetComponent = (props) => {
  const { name, imageSrc, radiationLevel, soundSrc , description} = props;

  return (
    <div className="planet-container">
      <div className="first-one">
        <img className="planet-image" src={imageSrc} alt={name} />
        <p>
          Name: {name} | Radiation Level: {radiationLevel}
        </p>
      </div>
      <div className="second-one">
        <p className="description-text">
          {description}
        </p>
        <audio className="planet-sound" src={soundSrc} controls loop />
      </div>
    </div>
  );
};

export default PlanetComponent;
