import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Calculator from './Calculator';
import ThemeToggle from './ThemeToggle';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Calculator />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
