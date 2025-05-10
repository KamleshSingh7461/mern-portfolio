import React from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import ParticlesComponent from '../components/ParticlesComponent'; // ✅ Import the particles
import './Contact.css';

const Contact = () => {
  return (
    <Box className="contact">
      <ParticlesComponent /> {/* Add background particles for dynamic effect */}

      {/* Left Column: Contact Form */}
      <div className="contact-form-container">
        <Typography className="contact-header">
          <h4>GET IN TOUCH</h4>
        </Typography>
        <Typography className="contact-title">
          <h1><b>Contact Me</b></h1>
        </Typography>

        {/* Contact Form */}
        <form className="contact-form">
          <TextField label="Your Name" variant="outlined" fullWidth className="contact-input" />
          <TextField label="Your Email" variant="outlined" fullWidth className="contact-input" type="email" />
          <TextField label="Subject" variant="outlined" fullWidth className="contact-input" />
          <TextField label="Message" variant="outlined" fullWidth className="contact-input" multiline rows={4} />

          <Button className="contact-button submit-button" type="submit">Send Message</Button>
        </form>
      </div>

      {/* Right Column: Image */}
      <div className="contact-image-container">
        <img
          src={require('../assets/5124556.jpg')} // Your image with transparent background
          alt="Contact Illustration"
          className="contact-image"
        />
      </div>
    </Box>
  );
};

export default Contact;
