import React from "react";
import mock11 from '../assets/images/mock11.png'; // Data Science
import mock12 from '../assets/images/mock12.png'; // Financial App
import mock13 from '../assets/images/mock13.png'; // TeachTeam App
import mock14 from '../assets/images/mock14.png'; // FullStackDev
import mock15 from '../assets/images/mock15.png'; // OS Assignment
import mock16 from '../assets/images/mock16.png'; // Discord Bot
import mock17 from '../assets/images/mock17.png'; // Social Media Analyser
import mock18 from '../assets/images/mock18.png'; // Algorithms

import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {/* Existing projects... */}

        <div className="project">
          <a href="https://github.com/Ridge19/Data-Science" target="_blank" rel="noreferrer">
            <img src={mock11} className="zoom" alt="Data Science thumbnail" width="100%" />
          </a>
          <h2>Data Science Portfolio</h2>
          <p>Includes Python notebooks covering machine learning models, statistical analysis, and data wrangling using libraries like Pandas, NumPy, and Scikit-learn.</p>
        </div>

        <div className="project">
          <a href="https://github.com/Ridge19/Financial-app" target="_blank" rel="noreferrer">
            <img src={mock12} className="zoom" alt="Financial App thumbnail" width="100%" />
          </a>
          <h2>Financial App</h2>
          <p>A Python-based banking simulation that applies OOP principles and file I/O to manage accounts and transactions.</p>
        </div>

        <div className="project">
          <a href="https://github.com/Ridge19/TeachTeam-app" target="_blank" rel="noreferrer">
            <img src={mock13} className="zoom" alt="TeachTeam App thumbnail" width="100%" />
          </a>
          <h2>TeachTeam App</h2>
          <p>A web platform that supports teacher-student collaboration. Developed with React, Node.js, and MongoDB.</p>
        </div>

        <div className="project">
          <a href="https://github.com/Ridge19/FullStackDev-APICall-Example" target="_blank" rel="noreferrer">
            <img src={mock14} className="zoom" alt="FullStack Dev Example thumbnail" width="100%" />
          </a>
          <h2>Full-Stack API Example</h2>
          <p>Demonstrates front-end and back-end integration using React and Express, including external API calls and JSON parsing.</p>
        </div>

        <div className="project">
          <a href="https://github.com/Ridge19/OS-Assignment2-Sem2-2024" target="_blank" rel="noreferrer">
            <img src={mock15} className="zoom" alt="OS Assignment thumbnail" width="100%" />
          </a>
          <h2>Operating Systems Assignment</h2>
          <p>Focuses on multithreading, semaphores, and synchronization. Implemented in C and submitted for university coursework.</p>
        </div>

        <div className="project">
          <a href="https://github.com/Ridge19/Discord-bot" target="_blank" rel="noreferrer">
            <img src={mock16} className="zoom" alt="Discord Bot thumbnail" width="100%" />
          </a>
          <h2>Discord Bot</h2>
          <p>Feature-rich bot developed in Python using discord.py. Includes AFK system, utility commands, and dictionary lookups.</p>
        </div>

        <div className="project">
          <a href="https://github.com/Ridge19/Social-Media-Analyser" target="_blank" rel="noreferrer">
            <img src={mock17} className="zoom" alt="Social Media Analyser thumbnail" width="100%" />
          </a>
          <h2>Social Media Analyser</h2>
          <p>Analyzes Twitter data using sentiment analysis and natural language processing techniques with Python and NLTK.</p>
        </div>

        <div className="project">
          <a href="https://github.com/Ridge19/Algorithms-Sem1-2025" target="_blank" rel="noreferrer">
            <img src={mock18} className="zoom" alt="Algorithms Project thumbnail" width="100%" />
          </a>
          <h2>Algorithms & Analysis</h2>
          <p>Explores sorting algorithms, divide-and-conquer, and runtime benchmarking. Written in Python for a university course.</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
