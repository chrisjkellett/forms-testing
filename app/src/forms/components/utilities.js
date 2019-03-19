import React from 'react';
import styles from './forms.module.css';

const errorMessages = {
  required: 'required',
  required_cb: 'required',
}

const formUtilities = {
  applyStyle: function(errors){
    if(errors.length !== 0){
      return styles.Error;
    }
  },

  printError: function(errors){
    if(errors.length !== 0){
      return (
        <span className={styles.ErrorMessage}>
          {errorMessages[errors[0]]}
        </span>
      );
    }
  }
};

export default formUtilities;