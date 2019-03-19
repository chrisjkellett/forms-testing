import React from 'react';
import {shape, string, func, array} from 'prop-types';
import forms from '../utilities';

const Input = props => {
  const {id, type, change, value, errors} = props.data;
  const errorMessage = forms.printError(errors);
  const styles = forms.applyStyle(errors);
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
    errors: array
  })
}

export default Input;