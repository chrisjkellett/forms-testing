import React, {Component} from 'react';
import {string, func, object, shape} from 'prop-types';

class Checkbox extends Component {
  $renderOptions(){
    const {change, id, type, value} = this.props.data;
    return Object.keys(value).map(item => {
      return (
        <span key={item}>
          <label>{item}</label>
          <input 
            type={type} 
            value={value[item]} 
            id={item}
            onChange={(e) => change(e, id)} />
        </span>
      )
    })
  }

  render() {
    const options = this.$renderOptions();
    return (
      <div>
        <label>{this.props.data.id}</label>
        {options}
      </div>
    )
  }
}

Checkbox.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    type: string.isRequired,
    value: object.isRequired
  })
}

export default Checkbox;