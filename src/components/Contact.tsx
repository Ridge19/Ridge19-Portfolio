import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name !== '' && email !== '' && message !== '') {
      setLoading(true);
      
      var templateParams = {
        name: name,
        email: email,
        message: message,
        time: new Date().toLocaleString()
      };

      // EmailJS Configuration - Replace with your actual values or use environment variables
      const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSnackbarMessage('Message sent successfully! I\'ll get back to you soon.');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error) => {
          console.log('FAILED...', error);
          setSnackbarMessage('Failed to send message. Please try again or contact me directly.');
          setSnackbarSeverity('error');
          setSnackbarOpen(true);
        },
      ).finally(() => {
        setLoading(false);
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <Button 
              variant="contained" 
              endIcon={<SendIcon />} 
              onClick={sendEmail}
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Contact;