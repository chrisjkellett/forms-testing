import React, {Component} from 'react';
import {string, func, object, shape} from 'prop-types';

class Checkbox extends Component {
  $renderOptions(){
    const {change, id, type, options} = this.props.data;
    return Object.keys(options).map(item => {
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
    options: object.isRequired
  })
}

export default Checkbox;