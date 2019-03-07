import React from 'react';
import {shape, string, func} from 'prop-types';

const Input = props => {
  const {id, type, change, value} = props.data;
  return (
    <div>
      <label>{id}</label>
      <input type={type} id={id} value={value} onChange={change} />
    </div>
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