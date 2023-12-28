import React from "react";
import SpeciesComponent from "../page/SpeciesComponent";
import "./Species.css";
import dinosaurs from "../assets/sound/dinosore.jpg";
import ratzillas from "../assets/sound/ratzila.webp";

const Species = () => {
  return (
    <section id="species">
      {/* <h2>Species</h2> */}
      <div className="species-gallery">
        <SpeciesComponent
          name="Dinosaurs"
          imageSrc={dinosaurs}
          information="Ancient creatures that once roamed the Earth."
          soundSrc="dinosaur_sound.mp3"
          description="Size and Diversity: Dinosaurs varied greatly in size, ranging from tiny creatures like the bird-sized Microraptor to gigantic sauropods like the long-necked Brachiosaurus and the massive long-tailed Tyrannosaurus rex. They came in various shapes, with diverse body structures, adaptations, and lifestyles.
          Classification: Dinosaurs are classified into two major groups: Saurischia and Ornithischia. Saurischian dinosaurs include theropods (like T. rex) and sauropodomorphs (such as Brachiosaurus), while Ornithischian dinosaurs include herbivorous dinosaurs like Triceratops and Stegosaurus.        
          Habitats and Environments: Dinosaurs lived in diverse environments, from forests and plains to wetlands and deserts, across different parts of the world. Their fossilized remains have been found on every continent.         
          Extinction: The most well-known extinction event that affected dinosaurs occurred around 65 million years ago at the end of the Cretaceous Period. Many theories suggest that a catastrophic event, such as an asteroid impact, volcanic eruptions, or climate change, might have contributed to this mass extinction, leading to the disappearance of non-avian dinosaurs.    
          Survivors and Evolution: Some lineages of dinosaurs survived this extinction event, evolving into birds. Birds are considered modern-day dinosaurs, sharing common ancestry with ancient reptiles like the Velociraptor and Archaeopteryx.
          Paleontology and Discoveries: Paleontologists study dinosaurs by examining fossilized bones, tracks, eggs, and other traces they left behind. Ongoing discoveries and research continue to expand our knowledge of these prehistoric creatures, shedding light on their behavior, biology, and evolutionary history.
          Popular Culture: Dinosaurs capture the imagination of people worldwide and have been popularized in movies, books, documentaries, and other media. Their immense size, adaptations, and mysterious disappearance continue to fascinate and inspire curiosity."
        />
        <SpeciesComponent
          name="ratzillas"
          imageSrc={ratzillas}
          information="An ancient human species."
          soundSrc="neanderthal_sound.mp3"
          description="Ratzilla is not a scientifically recognized term or a specific species of animal. However, it's occasionally used informally or in exaggerated contexts to refer to unusually large rats or exaggerated portrayals of rats. In most cases, these descriptions are fictional or exaggerated for storytelling or media purposes.

          Rats, particularly the common brown rat (Rattus norvegicus) and the black rat (Rattus rattus), are small to medium-sized rodents found worldwide. They typically measure around 9-11 inches (23-28 cm) in length, excluding the tail, and weigh anywhere from a few ounces to about a pound.
          
          However, urban legends or exaggerated reports might occasionally emerge about abnormally large rats, often referred to as Ratzilla due to their supposedly gigantic size. These reports could be based on misconceptions, optical illusions, or isolated instances of larger-than-average individuals, rather than representing an entirely new species or a widespread phenomenon.
          
          In reality, rats of extraordinary size or proportions, as portrayed in folklore or sensationalized stories, are uncommon. Most wild rats conform to the average size range for their species."
        />
      </div>
    </section>
  );
};

export default Species;
