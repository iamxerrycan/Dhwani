import React, { useState } from "react";
import "./PlanetComponent.css";

const PlanetComponent = (props) => {
  const { name, imageSrc, radiationLevel, soundSrc } = props;

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <audio className="planet-sound" src={soundSrc} controls loop />
      </div>
    </div>
  );
};

export default PlanetComponent;
