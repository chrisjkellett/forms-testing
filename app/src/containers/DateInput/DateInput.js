import React, { Component } from 'react';
import {string, func, shape} from 'prop-types';

class DateInput extends Component{
  render() {
    return (
      <div>
        Date input placeholder
      </div>
    )
  }
}

DateInput.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    type: string.isRequired,
    value: string.isRequired
  })
}

export default DateInput;