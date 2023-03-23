import React from "react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Navigation />
      <h1 className="title">A propos</h1>
      <p className="about">
        This website lists all the information available on the 250 countries of
        the world. <br></br>This website uses data from the API restcountries.
      </p>
    </div>
  );
};

export default About;
