// ThemeToggle.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Change Theme
    </button>
  );
};

export default ThemeToggle;
