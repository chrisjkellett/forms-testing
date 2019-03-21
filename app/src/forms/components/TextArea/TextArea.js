import React from 'react';
import {shape, func, array, string, bool, object} from 'prop-types';

const TextArea = props => {
  return (
    <p>text area placeholder</p>
  )
}

TextArea.propTypes = {
  data: shape({
    change: func.isRequired,
    errors: array.isRequired,
    id: string.isRequired,
    touched: bool.isRequired,
    type: string.isRequired,
    validation: object.isRequired,
    value: string.isRequired
  })
}

export default TextArea;