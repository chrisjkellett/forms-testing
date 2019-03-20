import React, {Component} from 'react';
import {string, func, object, shape, array, bool} from 'prop-types';
import forms from '../utilities';

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
    const {id, errors, touched} = this.props.data;
    const options = this.$renderOptions();
    const validationErrors = forms.printError(errors, touched);
    return (
      <div>
        <label>{id}</label>
        {validationErrors}
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
    value: object.isRequired,
    validation: object,
    errors: array,
    touched: bool.isRequired,
  })
}

export default Checkbox;