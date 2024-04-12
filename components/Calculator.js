import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import CalcStyles from '../styles/Calculator.module.css';
import InputField from './InputField';
// import PropTypes from 'prop-types';

export default function Calculator() {
  const [inputValue, setInputValue] = useState('');

  // this takes a param called btn and it will hold the value of the clicked button
  const handleButtonClick = (btn) => {
    // console.warn(`Button clicked: ${btn}`);
    if (btn) {
      setInputValue(inputValue + btn);
    }
  };

  const btnText = [
    ['C', '^', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  return (
    <>
      <InputField value={inputValue} />
      <div className={CalcStyles.gridBtn}>
        {btnText.flat().map((btn) => (
        // onclick calls handleButtonClick and passes the current btn value as an argument
          <Button className={`${CalcStyles.buttonColor}`} key={btn} onClick={() => handleButtonClick(btn)}>{btn}</Button>
        ))}
      </div>
    </>
  );
}
