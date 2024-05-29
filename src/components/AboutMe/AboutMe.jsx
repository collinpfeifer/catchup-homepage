/* eslint-disable max-len */
// cant use modules for this component
import React from 'react';
import './AboutMe.css';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  return (
    <div
      className="aboutme-main
      uk-flex
      uk-flex-center
      uk-flex-column
      uk-flex-middle"
      id='aboutme'
    >
      <div className="wrapper">
        <div className="box a">
          <Fade top>
            <h2 className="about-h2">Hobbies</h2>
            reading, poker, chess, cooking, debating <br /> discussing deep and
            theoretical ideas is my thing. anything goes from philisophy or
            psychology to politics.
          </Fade>
        </div>
        <div className="box b">
          <Fade top>
            <h2 className="about-h2">Dream Job</h2>
            therapist, developer or a college professor specializing in computer science,
            math, or psychology. <br /> <br />
            <h2 className="about-h2">Dream City</h2>Washington D.C. and
            New York City
          </Fade>
        </div>
        <div className="box c">
          <Fade bottom>
            <h2 className="about-h2">Role Models</h2>
            E.O. Scott, Albert Einstein, Phillipa Foot
          </Fade>
        </div>
        <div className="box d">
          <Fade bottom>
            <h2 className="about-h2">Music</h2>
            top artists are Kanye West, MF DOOM and Freddie Gibbs
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
