// src/components/ThemeToggle.js
import React from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;
