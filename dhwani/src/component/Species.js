import React from "react";
import SpeciesComponent from "../page/SpeciesComponent";
import './Species.css'

const Species = () => {
  return (
    <section id="species">
      <h2>Species</h2>
      <div className="species-gallery">

        <SpeciesComponent
          name="Dinosaurs"
          imageSrc="dinosaurs.jpg"
          information="Ancient creatures that once roamed the Earth."
          soundSrc="dinosaur_sound.mp3"
        />
        <SpeciesComponent
          name="Neanderthals"
          imageSrc="neanderthals.jpg"
          information="An ancient human species."
          soundSrc="neanderthal_sound.mp3"
        />
      </div>
    </section>
  );
};

export default Species;
