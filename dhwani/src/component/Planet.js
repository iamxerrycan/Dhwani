import React from "react";
import PlanetComponent from "../page/PlanetComponent";
import './Planet.css'

const Planet = () => {
  return (
    <section id="planet">
      <h2>Planets</h2>
      <div className="planets-gallery">
        <PlanetComponent
          name="Mercury"
          imageSrc="mercury.jpg"
          radiationLevel="Moderate"
          soundSrc="mercury_sound.mp3"
        />
        <PlanetComponent
          name="Venus"
          imageSrc="venus.jpg"
          radiationLevel="High"
          soundSrc="venus_sound.mp3"
        />
      </div>
    </section>
  );
};

export default Planet;
