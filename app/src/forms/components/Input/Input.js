import React, {Component} from 'react';
import {shape, string, func, array} from 'prop-types';
import styles from './Input.module.css';

class Input extends Component {
  $styles(){
    const {errors} = this.props.data;
    if(errors.length !== 0){
      return styles.Error;
    }
  }

  $errors(){
    const {errors} = this.props.data;
    if(errors.length !== 0){
      return (
        <span className={styles.ErrorMessage}>
          {errors[0]}
        </span>
      );
    }
  }

  render() {
    const {id, type, change, value} = this.props.data;
    const errors = this.$errors();
    return (
      <div>
        <label>{id}</label>
        {errors}
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