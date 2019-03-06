import React from 'react';
import {string, func, object, shape} from 'prop-types';

const Checkbox = props => {
  const {change, id, type, options} = props.data;
  return (
    <div>
      <label>{id}</label>
      {Object.keys(options).map(item => {
        return (
          <span key={item}>
            <label>{item}</label>
            <input 
              type={type} 
              group={id} 
              value={options[item].checked} 
              id={item}
              onChange={change} />
          </span>
        )
      })}
    </div>
  )
}

Checkbox.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    type: string.isRequired,
    options: object.isRequired
  })
}

export default Checkbox;