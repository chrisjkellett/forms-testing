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
    const {id, change, value, groupId} = this.props.data;
    return (
      <span id={`${id}-wrapper`}>
        <select id={id} value={value[id]} onChange={(e) => change(e, groupId)}>
          {options}
        </select>
      </span>
    )
  }
}


DateSelect.propTypes = {
  data: shape({
    change: func.isRequired,
    groupId: string.isRequired,
    id: string.isRequired,
    options: arrayOf(object).isRequired,
    type: string.isRequired,
    value: shape({
      day: string.isRequired,
      month: string.isRequired,
      year: string.isRequired
    })
  })
}

export default DateSelect;