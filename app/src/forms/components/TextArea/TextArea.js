import React from 'react';
import {shape, func, array, string, bool, object} from 'prop-types';
import forms from '../form-helpers';

const TextArea = props => {
  const {id, value, change, errors, touched} = props.data;
  const validationError = forms.printError(errors, touched);
  return (
    <div id={`${id}-wrapper`}>
      <label>{id}</label>
      {validationError}
      <textarea id={id} value={value} onChange={change} />
    </div>
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