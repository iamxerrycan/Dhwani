import React from "react";
import PlanetComponent from "../page/PlanetComponent";
import './Planet.css'
import mercuryImage from '../assets/img/mercuri.jpeg'
import mercurySound from '../assets/sound/mercury.mp3'
import blackwhole from '../assets/sound/bwhole.webp'
import blackwholem from '../assets/sound/bwhole.mp3'

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
        <PlanetComponent
          name="Kalpanwa"
          imageSrc={blackwhole}
          radiationLevel="danger hai dekhna bhi mat"
          soundSrc={blackwholem}
        />
        {/* Add other PlanetComponent instances as needed */}
      </div>
    </section>
  );
};

export default Planet;
