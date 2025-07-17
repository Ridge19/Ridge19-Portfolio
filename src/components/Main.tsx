import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHMMLpJ222aig/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711705120313?e=1758153600&v=beta&t=Dief7NhPmbOe0NUxg1sHakbS8x5VLWGlzwAkp0vvQE8" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Ridge19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ridge-tagala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ridge Tagala</h1>
          <p>Senior Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Ridge19" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ridge-tagala/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;