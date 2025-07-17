import React from "react";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Resume.scss';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Ridge_Tagala_Resume.pdf';
    link.download = 'Ridge_Tagala_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container" id="resume">
      <div className="resume-container">
        <h1>Resume</h1>
        <div className="resume-content">
          <div className="resume-description">
            <DescriptionIcon className="resume-icon" />
            <h3>Download My Resume</h3>
            <p>
              Get a comprehensive overview of my experience, skills, and achievements. 
              My resume includes detailed information about my work at RMIT Rover Team, 
              BusinessLocal, and other professional experiences.
            </p>
          </div>
          <div className="resume-download">
            <Button 
              variant="contained" 
              size="large"
              startIcon={<DownloadIcon />} 
              onClick={handleDownload}
              className="download-button"
            >
              Download Resume (PDF)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
