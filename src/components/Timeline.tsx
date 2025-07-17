import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">RMIT Rover Team | Melbourne, VIC</h4>
            <p>
              Contributing to autonomous rover systems focusing on navigation, obstacle avoidance, and control of scientific instruments. Developing Python and C++ code in Linux environments, working with ROS2 nodes for sensor fusion, motion control, and SLAM-based localisation.
            </p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">BusinessLocal | Cheltenham, VIC</h4>
            <p>
              Built and maintained backend systems for multiple client platforms using Node.js and Express. Developed RESTful APIs, led CI/CD and deployment processes, and resolved critical bugs to ensure stable, scalable web applications.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assistant IT Lead</h3>
            <h4 className="vertical-timeline-element-subtitle">LifeStyle Markets Australia | Melbourne, VIC</h4>
            <p>
              Streamlined operational processes improving task turnaround by 25%. Automated office workflows, trained staff, and supported cross-department projects to enhance service delivery.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mar 2023 - July 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Peer Mentor (CSIT)</h3>
            <h4 className="vertical-timeline-element-subtitle">RMIT University | Melbourne, VIC</h4>
            <p>
              Supported 20+ mentees academically and personally. Led workshops and study groups, enhancing peer understanding of computing concepts while building confidence and engagement.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Feb 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Gaming Attendant / Bartender</h3>
            <h4 className="vertical-timeline-element-subtitle">Deer Park Club | Deer Park, VIC</h4>
            <p>
              Provided high-quality service to 100+ patrons per shift, managed gaming compliance, and trained team members to ensure operational excellence in a fast-paced environment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
