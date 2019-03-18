import React, {Component} from 'react';
import {shape, string, func, array} from 'prop-types';
import styles from './Input.module.css';

class Input extends Component {
  $styles(){
    if(this.props.data.errors.length !== 0){
      return styles.Error;
    }
  }

  render() {
    const {id, type, change, value} = this.props.data;
    return (
      <div>
        <label>{id}</label>
        <input 
          type={type} 
          id={id}
          className={this.$styles()} 
          value={value} 
          onChange={change} />
      </div>
    )
  }
}

Input.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    type: string.isRequired,
    value: string.isRequired,
    errors: array
  })
}

export default Input;