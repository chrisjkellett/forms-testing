import React from 'react';
import {shape, string, func} from 'prop-types';

const Input = props => {
  return(
    <p>Input placeholder</p>
  )
}

Input.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    type: string.isRequired,
    value: string.isRequired
  })
}

export default Input;