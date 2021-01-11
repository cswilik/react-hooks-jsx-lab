import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Caramels candy chocolate cake candy canes cupcake toffee jelly beans tootsie roll marshmallow. Brownie jujubes sesame snaps lollipop pie. Cheesecake wafer cupcake donut.</p>
    <img src={image} alt= "I made this"/>
  </div>;
}

export default About;
