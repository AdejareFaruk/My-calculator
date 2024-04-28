import React from 'react';
import './App.css';
import { useTheme } from './ThemeContext';
import { useState } from 'react';

const Calculator = () => {
  const { theme } = useTheme();
  const [display, setDisplay] = useState('0');

  const handleClick = (value) => {
    if (value === '=') {
      // Calculate result
      calculateResult();
    } else if (value === 'AC') {
      // Clear display
      setDisplay('0');
    } else if (value === '%') {
      // Calculate percentage
      calculatePercentage();
    } else if (value === '+/-') {
      // Negate the current value
      negateValue();
    } else if (value === '÷') {
      // Handle division
      handleDivision();
    } else {
      // Append value to display
      if (display === '0') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  const calculateResult = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const calculatePercentage = () => {
    try {
      const result = eval(display) / 100;
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  const negateValue = () => {
    if (display[0] === '-') {
      setDisplay(display.slice(1));
    } else {
      setDisplay('-' + display);
    }
  };

  const handleDivision = () => {
    // Check if the last character in display is a number or decimal point
    const lastChar = display[display.length - 1];
    if (!isNaN(lastChar) || lastChar === '.') {
      setDisplay(display + '/');
    } else {
      // Replace the last operator with division
      setDisplay(display.slice(0, display.length - 1) + '/');
    }
  };

  return (
    <div className={`calculator ${theme}`}>
      <div className="display">{display}</div>
      <div className="buttons">
        {['AC', '+/-', '%', '÷','7', '8', '9','*', '4', '5', '6', '-', '1', '2', '3','+','0', '.', '='].map((value) => (
          <button
            key={value}
            className={`button ${['÷', '*', '-', '+', '='].includes(value) ? 'operator' : ""} ${value === '=' ? 'equals' : ''}`}
            onClick={() => handleClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
