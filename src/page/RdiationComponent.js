import React from "react";

const RdiationComponent = (props) => {
  const { imageSrc, name, description, soundSrc } = props;
  return (
    <div className="planet-container">
      <div className="first-one">
        <img className="planet-image" src={imageSrc} alt={name} />
        <p>Name: {name}</p>
      </div>
      <div className="second-one">
        <p className="description-text">{description}</p>
        <audio className="planet-sound" src={soundSrc} controls loop />
      </div>
    </div>
  );
};

export default RdiationComponent;
