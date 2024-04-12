import { Button } from 'react-bootstrap';
// import React, { useState } from 'react';
import CalcStyles from '../styles/Calculator.module.css';
// import PropTypes from 'prop-types';

export default function Calculator() {
  // const [value, setValue] = useState('');
  const handleButtonClick = (btn) => {
    console.warn(`Button clicked: ${btn}`);
  };

  const btnText = [
    ['C', '^', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  return (
    <div className={CalcStyles.gridBtn}>
      {btnText.flat().map((btn) => (
        <Button className={`${CalcStyles.buttonColor}`} key={btn} onClick={() => handleButtonClick(btn)}>{btn}</Button>
      ))}
    </div>
  );
}
