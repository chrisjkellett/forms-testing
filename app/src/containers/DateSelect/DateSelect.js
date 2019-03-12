import React, {Component} from 'react';
import {string, shape, func,arrayOf, object} from 'prop-types';

class DateSelect extends Component {
  $renderOptions(){
    return this.props.data.options.map(item => {
      return <option key={item.id} value={item.id}>{item.label}</option>
    })
  }

  render() {
    const options = this.$renderOptions();
    const {id, change, value} = this.props.data;
    return (
      <span id={`${id}-wrapper`}>
        <select id={id} value={value} onChange={change}>
          {options}
        </select>
      </span>
    )
  }
}


DateSelect.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    options: arrayOf(object).isRequired,
    type: string.isRequired,
    value: string.isRequired
  })
}

export default DateSelect;