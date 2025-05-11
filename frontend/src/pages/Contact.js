import React, { useState } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import ParticlesComponent from '../components/ParticlesComponent';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://kamlesh-portfolio.onrender.com/api/contact', {
        name: formData.name,
        email: formData.email,
        message: `${formData.subject}\n\n${formData.message}`,
      });

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <Box className="contact">
      <ParticlesComponent /> {/* Add background particles for dynamic effect */}

      <div className="contact-form-container">
        <Typography className="contact-header">
          <h4>GET IN TOUCH</h4>
        </Typography>
        <Typography className="contact-title">
          <h1><b>Contact Me</b></h1>
        </Typography>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <TextField
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="contact-input"
            required
          />
          <TextField
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="contact-input"
            type="email"
            required
          />
          <TextField
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="contact-input"
            required
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            className="contact-input"
            multiline
            rows={4}
            required
          />

          <Button className="contact-button submit-button" type="submit">
            Send Message
          </Button>

          {/* Status Message */}
          {status && <p className="form-status">{status}</p>}
        </form>
      </div>

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
