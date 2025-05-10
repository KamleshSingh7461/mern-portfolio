// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social Icons

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.infoSection}>
          <h4 style={styles.footerTitle}>About Me</h4>
          <p style={styles.footerText}>
            I'm a passionate web developer who loves building intuitive, responsive websites. Let's build something amazing together!
          </p>
        </div>

        <div style={styles.socialSection}>
          <h4 style={styles.footerTitle}>Connect with Me</h4>
          <div style={styles.socialIcons}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaGithub size={30} style={styles.icon} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaLinkedin size={30} style={styles.icon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaInstagram size={30} style={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
              <FaTwitter size={30} style={styles.icon} />
            </a>
          </div>
        </div>

        <div style={styles.contactSection}>
          <h4 style={styles.footerTitle}>Contact</h4>
          <p style={styles.footerText}>
            Email: <a href="mailto:kamlesh7461@gmail.com" style={styles.emailLink}>kamlesh7461@gmail.com</a>
          </p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} Kamlesh Singh. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#121212', // Dark background for contrast
    color: '#FFFFFF',
    padding: '0px 20px',
    fontSize: '1rem',
    textAlign: 'center',
    fontFamily: "'Roboto', sans-serif",
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    zIndex: '10',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: '40px',
    gap: '30px',
  },
  infoSection: {
    flex: 1,
    minWidth: '280px',
    margin: '10px',
  },
  socialSection: {
    flex: 1,
    minWidth: '280px',
    margin: '10px',
  },
  contactSection: {
    flex: 1,
    minWidth: '280px',
    margin: '10px',
  },
  footerTitle: {
    fontSize: '1.5rem',
    fontWeight: '500',
    color: '#f1f1f1',
    letterSpacing: '1px',
    marginBottom: '15px',
  },
  footerText: {
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#b0b0b0',
    marginBottom: '15px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    marginTop: '20px',
  },
  iconLink: {
    color: '#b0b0b0',
    textDecoration: 'none',
    transition: 'transform 0.3s ease, color 0.3s ease',
  },
  icon: {
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  iconLinkHover: {
    transform: 'scale(1.2)',
    color: '#38bdf8',
  },
  emailLink: {
    color: '#38bdf8',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  },
  footerBottom: {
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#1c1c1c',
    boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.1)',
  },
  copyright: {
    fontSize: '1rem',
    color: '#b0b0b0',
  },
};

export default Footer;
