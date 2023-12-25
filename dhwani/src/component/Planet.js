import React from "react";
import PlanetComponent from "../page/PlanetComponent";
import './Planet.css'
import mercuryImage from '../assets/img/mercuri.jpeg'
import mercurySound from '../assets/sound/mercury.mp3'

const Planet = () => {
  return (
    <section id="planet">
      <div className="planets-gallery">
        <PlanetComponent
          name="Mercury"
          imageSrc={mercuryImage}
          radiationLevel="Moderate"
          soundSrc={mercurySound}
        />
        {/* Add other PlanetComponent instances as needed */}
      </div>
    </section>
  );
};

export default Planet;
