import React from "react";
import "./Home.css";
import logo1 from '../assets/img/galaxy.jpeg'
import logo2 from '../assets/img/nomore.jpeg'
import logo3 from '../assets/img/sea.jpeg'
import logo4 from '../assets/img/wave.jpg'

const Home = () => {
  return (
    <div id="/" className="home-main">
           <div className="intro-section">
        <h3>Welcome To Dhwani!</h3>
        <p>
          Dhwani aims to provide real sounds of planets and ancient species,
          offering an immersive experience into the natural sounds of our universe's
          diverse elements.
        </p>
      </div>
      <div className="content-section">
        <div className="content-item">
          <img src={logo1} alt="Image 1" />
          <p>As you know its our Galaxy .</p>
        </div>
        <div className="content-item">
          <img src={logo2} alt="Image 2" />
          <p>The oldest sea Creature .</p>
        </div>
        <div className="content-item">
          <img src={logo3} alt="Image 3" />
          <p>The oldest animal that does`t exist .</p>
        </div>
        <div className="content-item">
          <img src={logo4} alt="Image 4" />
          <p>Radiation , i`m going to add sound .</p>
        </div>
      </div>
 
    </div>
  );
};

export default Home;
