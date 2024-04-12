import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function InputField({ value }) {
  return (
    <>
      <Form.Control type="text" value={value} />
    </>
  );
}

InputField.propTypes = {
  value: PropTypes.string,
};

InputField.defaultProps = {
  value: '',
};
