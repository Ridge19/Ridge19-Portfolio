import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "RESTful APIs",
    "GraphQL",
    "Microservices",
    "Java",
    "Spring Boot"
];

const labelsSecond = [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQL Server",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Jenkins",
    "Git",
    "Linux"
];

const labelsThird = [
    "ROS",
    "C++",
    "Python",
    "WebRTC",
    "Gazebo / RViz",
    "Git/Github version Control",
    "openCV",
    "Linux"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Experienced in building scalable web applications and banking systems using modern technologies. Proficient in both frontend and backend development with a focus on performance and user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud & DevOps</h3>
                    <p>Skilled in cloud infrastructure, containerization, and CI/CD pipelines. Experience with database optimization, system architecture, and automated deployment processes in enterprise environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Robotics and Engineering</h3>
                    <p>Contributing to the design, development, and integration of software systems for RMIT’s Mars Rover project. Focused on robotics, automation, and control systems, with hands-on experience in ROS, computer vision, and autonomous navigation. Collaborating with multidisciplinary teams to build innovative solutions for international rover competitions while enhancing skills in algorithm development, system optimisation, and team-based engineering.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;