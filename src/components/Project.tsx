import React from "react";
import mock11 from '../assets/images/mock11.png'; // Data Science
import mock12 from '../assets/images/mock12.png'; // Financial App
import mock13 from '../assets/images/mock13.png'; // TeachTeam App
import mock14 from '../assets/images/mock14.png'; // FullStackDev
import mock15 from '../assets/images/mock15.png'; // OS Assignment
import mock16 from '../assets/images/mock16.png'; // Discord Bot
import mock17 from '../assets/images/mock17.png'; // Social Media Analyser
import mock18 from '../assets/images/mock18.png'; // Algorithms
import mock19 from '../assets/images/mock19.png'; // GUI For Rover Team
import mock20 from '../assets/images/mock20.jpg'; // pacman AI 2025 project
import mock21 from "../assets/images/mock21.png"; // Minecraft C++ project

import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {/* Discord Bot - Personal */}
        <div className="project">
          <a href="https://github.com/Ridge19/Discord-bot" target="_blank" rel="noreferrer">
            <img src={mock16} className="zoom" alt="Discord Bot thumbnail" width="100%" />
          </a>
          <h2>Discord Bot</h2>
          <p>Feature-rich bot developed in Python using discord.py. Includes AFK system, utility commands, and dictionary lookups.</p>
          <div className="project-tech">
            <span className="project-type-tag">Personal Project</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">discord.py</span>
            <span className="tech-tag">Async/Await</span>
            <span className="tech-tag">APIs</span>
            <span className="tech-tag">yt-dlp</span>
          </div>
        </div>
        {/* Full-Stack API Example - Personal */}
        <div className="project">
          <a href="https://github.com/Ridge19/FullStackDev-APICall-Example" target="_blank" rel="noreferrer">
            <img src={mock14} className="zoom" alt="FullStack Dev Example thumbnail" width="100%" />
          </a>
          <h2>Full-Stack API Example</h2>
          <p>Demonstrates front-end and back-end integration using React and Express, including external API calls and JSON parsing.</p>
          <div className="project-tech">
            <span className="project-type-tag">Personal Project</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Express.js</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">JSON</span>
          </div>
        </div>
        {/* GUI For Rover Team - Personal */}
        <div className="project">
          <a href="https://github.com/Ridge19/RoverTeam-GUI" target="_blank" rel="noreferrer">
            <img src={mock19} className="zoom" alt="GUI For Rover Team Example thumbnail" width="100%" />
          </a>
          <h2>GUI For Rover Team</h2>
          <p>A graphical user interface for the RMIT Rover Team, built with React and Tailwind CSS, using WebRTC to view the cameras in real time.</p>
          <div className="project-tech">
            <span className="project-type-tag">Personal Project</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Tailwind CSS</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">WebRTC API</span>
            <span className="tech-tag">Networking</span>
          </div>
        </div>
        {/* Pacman Project - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/AI25-p1-search-Ridge19" target="_blank" rel="noreferrer">
            <img src={mock20} className="zoom" alt="Pacman AI Thumbnail" width="100%" />
          </a>
          <h2>Pacman Project</h2>
          <p>A project for the Class Artifical Intelligence at RMIT University, Semester 1, 2025. Focuses popular search algorithms and integrates it with the Pacman game.</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Artificial Intelligence</span>
            <span className="tech-tag">Search Algorithms</span>
            <span className="tech-tag">DFS</span>
            <span className="tech-tag">BFS</span>
            <span className="tech-tag">A*</span>
            <span className="tech-tag">Intelligent Agents</span>
            <span className="tech-tag">Pacman Game</span>
          </div>
        </div>
        {/* TeachTeam App - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/TeachTeam-app" target="_blank" rel="noreferrer">
            <img src={mock13} className="zoom" alt="TeachTeam App thumbnail" width="100%" />
          </a>
          <h2>TeachTeam App</h2>
          <p>A web platform that supports teacher-student collaboration. Developed with React, Node.js, and MongoDB.</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Typescript</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">PHPMyAdmin DB</span>
            <span className="tech-tag">RESTful API</span>
            <span className="tech-tag">GraphQL</span>
            <span className="tech-tag">JavaScript</span>
          </div>
        </div>
        {/* Minecraft C++ Project (mcpp) - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/Minecraft-Cpp" target="_blank" rel="noreferrer">
            <img src={mock21} className="zoom" alt="Minecraft C++ Thumbnail" width="100%" />
          </a>
          <h2>Minecraft C++ Project</h2>
          <p>A project for Programming Studio 2 at RMIT University. uses the mcpp (minecraft C++) Library to create a Maze in Minecraft, using recursive division</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">C++</span>
            <span className="tech-tag">mcpp</span>
            <span className="tech-tag">Recursion</span>
            <span className="tech-tag">Algorithms</span>
            <span className="tech-tag">Maze Generation</span>
            <span className="tech-tag">Minecraft Commands</span>
            <span className="tech-tag">Game Mechanics</span>
            <span className="tech-tag">Event Handling</span>
          </div>
        </div>
        {/* Algorithms & Analysis - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/Algorithms-Sem1-2025" target="_blank" rel="noreferrer">
            <img src={mock18} className="zoom" alt="Algorithms Project thumbnail" width="100%" />
          </a>
          <h2>Algorithms & Analysis</h2>
          <p>Explores sorting algorithms, divide-and-conquer, and runtime benchmarking. Written in Python for a university course.</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Algorithms</span>
            <span className="tech-tag">Data Structures</span>
            <span className="tech-tag">Empirical Analysis</span>
            <span className="tech-tag">Big O Notation</span>
          </div>
        </div>
        {/* Data Science Portfolio - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/Data-Science" target="_blank" rel="noreferrer">
            <img src={mock11} className="zoom" alt="Data Science thumbnail" width="100%" />
          </a>
          <h2>Data Science Portfolio</h2>
          <p>Includes Python notebooks covering machine learning models, statistical analysis, and data wrangling using libraries like Pandas, NumPy, and Scikit-learn.</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Pandas</span>
            <span className="tech-tag">NumPy</span>
            <span className="tech-tag">Scikit-learn</span>
            <span className="tech-tag">Jupyter</span>
          </div>
        </div>
        {/* OS Assignment - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/OS-Assignment2-Sem2-2024" target="_blank" rel="noreferrer">
            <img src={mock15} className="zoom" alt="OS Assignment thumbnail" width="100%" />
          </a>
          <h2>Operating Systems Assignment</h2>
          <p>Focuses on multithreading, semaphores, and synchronization. Implemented in C and submitted for university coursework.</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">C</span>
            <span className="tech-tag">Multithreading</span>
            <span className="tech-tag">Semaphores</span>
            <span className="tech-tag">POSIX</span>
            <span className="tech-tag">Synchronization</span>
          </div>
        </div>
        {/* Social Media Analyser - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/Social-Media-Analyser" target="_blank" rel="noreferrer">
            <img src={mock17} className="zoom" alt="Social Media Analyser thumbnail" width="100%" />
          </a>
          <h2>Social Media Analyser</h2>
          <p>Developed a Java application with a JavaFX GUI that analyzes social media posts read from text files using NLP and sentiment analysis techniques. Integrated JDBC for database storage and retrieval of results, providing visual sentiment distribution insights within the interface.</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">Java</span>
            <span className="tech-tag">JavaFX</span>
            <span className="tech-tag">JDBC</span>
            <span className="tech-tag">NLP</span>
            <span className="tech-tag">SQL</span>
          </div>
        </div>
        {/* Financial App - University */}
        <div className="project">
          <a href="https://github.com/Ridge19/Financial-app" target="_blank" rel="noreferrer">
            <img src={mock12} className="zoom" alt="Financial App thumbnail" width="100%" />
          </a>
          <h2>Financial App</h2>
          <p>A Python-based banking simulation that applies OOP principles and file I/O to manage accounts and transactions.</p>
          <div className="project-tech">
            <span className="project-type-tag">University Project</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">OOP</span>
            <span className="tech-tag">File I/O</span>
            <span className="tech-tag">User Input</span>
            <span className="tech-tag">Input Validation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
