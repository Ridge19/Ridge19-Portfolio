import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import DownloadIcon from '@mui/icons-material/Download';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Resume.scss';

function Resume() {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastSeverity, setToastSeverity] = useState<'success' | 'error' | 'warning'>('error');

  const handleDownloadClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUserInput('');
  };

  const showToast = (message: string, severity: 'success' | 'error' | 'warning' = 'error') => {
    setToastMessage(message);
    setToastSeverity(severity);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleConfirmDownload = () => {
    // Simple verification: ask user to type "DOWNLOAD"
    if (userInput.toLowerCase() === 'download') {
      // Add a small delay to deter bots
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = '/Ridge_Tagala_Resume.pdf';
        link.download = 'Ridge_Tagala_Resume.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setOpen(false);
        setUserInput('');
        setAttempts(0);
        showToast('Resume download started successfully!', 'success');
      }, 1000);
    } else {
      setAttempts(prev => prev + 1);
      setUserInput('');
      
      if (attempts >= 2) {
        showToast('Too many failed attempts. Please refresh the page to try again.', 'error');
        setOpen(false);
        setAttempts(0);
      } else {
        showToast(`Incorrect input. ${2 - attempts} attempts remaining.`, 'warning');
      }
    }
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
              onClick={handleDownloadClick}
              className="download-button"
            >
              Download Resume (PDF)
            </Button>
          </div>
        </div>

        {/* Bot Protection Dialog */}
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <DialogTitle>Verify Human Access</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To download my resume, please type the word "DOWNLOAD" below. This helps prevent automated downloads.
              {attempts > 0 && (
                <span style={{ color: 'red', display: 'block', marginTop: '10px' }}>
                  Incorrect input. {3 - attempts} attempts remaining.
                </span>
              )}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Type DOWNLOAD"
              fullWidth
              variant="outlined"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleConfirmDownload();
                }
              }}
              error={attempts > 0}
              sx={{ mt: 2 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleConfirmDownload} variant="contained">
              Confirm Download
            </Button>
          </DialogActions>
        </Dialog>

        {/* Toast Notifications */}
        <Snackbar 
          open={toastOpen} 
          autoHideDuration={4000} 
          onClose={handleToastClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleToastClose} 
            severity={toastSeverity} 
            sx={{ width: '100%' }}
            variant="filled"
          >
            {toastMessage}
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Resume;
