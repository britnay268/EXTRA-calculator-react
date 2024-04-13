/* eslint-disable import/no-extraneous-dependencies */

import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import CalcStyles from '../styles/Calculator.module.css';
import InputField from './InputField';

export default function Calculator() {
  // useState helps mnage variables within the function

  // setInputValue and setExpression are FUNCTIONS to update their respective states

  // inputValue is a VARIABLE that stores the current value displayed on the calculator
  const [inputValue, setInputValue] = useState('');
  // expression stores the complete user input (numbers and operators)
  const [expression, setExpression] = useState('');
  // currentValue empties the inputfield after an expression was calculated and a new button is clicked.
  const [currentValue, setCurrentValue] = useState('');

  // Function is called whenever the button is clicked
  // This function takes a param called btn and it will hold the value of the clicked button
  const handleButtonClick = (btn) => {
    // Example of how it works: If the user clicks the button "5", the handleButtonClick function might update inputValue to "5" (to show on the display) and expression to "5" (to store the user input).

    if (btn === 'C') {
      setInputValue('');
      setExpression('');
    } else if (btn === 'DEL') {
      setInputValue(inputValue.slice(0, -1));
      setExpression(inputValue.slice(0, -1));
    } else if (btn === '=') {
      try {
        if (expression.includes('+')) {
          const indvidualNum = expression.split('+');
          const sum = indvidualNum.reduce((prevNum, currentNum) => parseFloat(prevNum) + parseFloat(currentNum));
          setInputValue(sum.toString());
          setExpression('');
          setCurrentValue(currentValue);
        }
        // setInputValue(result.toString());
      } catch (error) {
        console.error('Error evaluating expression:', error);
        setInputValue('Error'); // Or display a more user-friendly error message
      }
    } else {
      // if button is clicked, this line updates the inputValue variable by taking the current inputValue and adds the btn value to it
      setInputValue(expression + btn);
      setExpression(expression + btn);
      setCurrentValue('');
    }
  };

  const btnText = [
    ['C', 'DEL', '%', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['+/-', 0, '.', '='],
  ];

  return (
    <>
      <InputField value={inputValue} />
      <div className={CalcStyles.gridBtn}>
        {btnText.flat().map((btn) => (
        // onclick calls handleButtonClick and passes the current btn value as an argument
          <Button
            className={CalcStyles.buttonColor}
            key={btn}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </Button>
        ))}
      </div>
    </>
  );
}
