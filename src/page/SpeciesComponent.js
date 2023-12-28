import React, { useState } from "react";
import "./PlanetComponent.css";

const SpeciesComponent = (props) => {
  const { name, imageSrc, information, soundSrc , description} = props;

  return (
    <div className="planet-container">
      <div className="first-one">
        <img className="planet-image" src={imageSrc} alt={name} />
        <p>
          Name: {name} | Radiation Level: {information}
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

export default SpeciesComponent;
