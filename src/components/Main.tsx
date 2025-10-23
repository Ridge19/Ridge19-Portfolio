import React from "react";
import profilePic from '../assets/images/profile-picture.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ridge19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ridge-tagala2002/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ridge Tagala</h1>
          <p>Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ridge19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ridge-tagala2002/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;