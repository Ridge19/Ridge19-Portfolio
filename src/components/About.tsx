import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-card">
          <div className="about-icon">👨‍💻</div>
          <h2>Background</h2>
          <p>
                I'm a driven Software Engineer currently studying Computer Science at RMIT University, with practical
                experience across the financial technology space. My foundation in banking systems and software
                development allows me to contribute meaningfully to real-world projects while continuing to grow
                through both study and hands-on industry experience.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🚀</div>
          <h2>Journey</h2>
          <p>
                My journey began with a fascination for problem-solving through code, which led me to specialize in
                full-stack development and automation. I've had the privilege of working at
                BusinessLocal, where I've contributed to both frontend and backend development. With my recent role at RMIT Rover Team, 
                I'm now diving into robotics and autonomous systems, further expanding my technical horizons.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">💡</div>
          <h2>Philosophy</h2>
          <p>
                When I'm not coding, you'll find me mentoring fellow students, exploring new technologies, or 
                working on personal projects that challenge my skills. I believe in continuous learning and 
                staying current with industry trends to deliver innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
