import React from 'react';
import {shape, string, func, array, bool, object} from 'prop-types';
import forms from '../form-helpers';

const Input = props => {
  const {id, type, change, value, errors, touched} = props.data;
  const errorMessage = forms.printError(errors, touched);
  const styles = forms.applyStyle(errors, touched);
  return (
      <div>
        <label>{id}</label>
        {errorMessage}
        <input 
          type={type} 
          id={id}
          className={styles} 
          value={value} 
          onChange={change} />
      </div>
    )
}

Input.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    type: string.isRequired,
    value: string.isRequired,
    validation: object,
    errors: array,
    touched: bool.isRequired,
  })
}

export default Input;