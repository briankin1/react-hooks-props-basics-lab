import React from "react";
import Links from "./Links"; // Import the Links component

function About({ bio, links }) { // Destructure props here
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>} {/* Conditional rendering for bio */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} /> {/* Pass links to Links component */}
    </div>
  );
}

export default About;