import { Button } from 'react-bootstrap';
import React from 'react';
import CalcStyles from '../styles/Calculator.module.css';
// import PropTypes from 'prop-types';

export default function Calculator() {
  const btnText = [
    ['C', '^', '%', '/'],
    [7, 8, 9, 'x'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, ' ', '.', '='],
  ];

  return (
    <div className={CalcStyles.gridBtn}>
      {btnText.flat().map((btn) => (
        <Button key={btn}>{btn}</Button>
      ))}
    </div>
  );
}

// Calculator.propTypes = {
//   value: PropTypes.number,
// };

// Calculator.defaultProps = {
//   value: 0,
// };
