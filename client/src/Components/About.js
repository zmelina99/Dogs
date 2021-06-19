import React from "react";
import NavBar from "./NavBar";
import "./About.css";
import panchin from "../Images/panchin.jpg";
import panchin2 from "../Images/panchin2.jpg";
import panchin3 from "../Images/panchin3.jpg";

export default function About() {
  return (
    <div>
      <NavBar />

      <div id="cardContainerA">
        <p id="info">
          This is the individual project I presented to my bootcamp's teachers.
          I built it using PostgreSQL, Sequelize, Node.js, Express, React and
          Redux. It's a simple app where you can browse dog breeds using
          different filters. You can also create a new breed and it will add it
          to the list!
        </p>
      </div>
      <div className="pics">
        <img className="panchi" src={panchin} alt="" />
        <img className="panchi" src={panchin2} alt="" />
        <img className="panchi" src={panchin3} alt="" />
      </div>
    </div>
  );
}
