import React from 'react';
import {string, shape, func,arrayOf, object} from 'prop-types';

const Select = props => {
  console.log(props);
  return (
    <p>Select placeholder</p>
  )
}

Select.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    options: arrayOf(object).isRequired,
    type: string.isRequired
  })
}

export default Select;