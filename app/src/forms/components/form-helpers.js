import React from 'react';
import styles from './forms.module.css';

const errorMessages = {
  required: 'required',
  required_cb: 'required',
  is_valid_date: 'invalid date',
  maxLength: 'minimum length'
}

const formUtilities = {
  applyStyle: function(errors, touched){
    if(errors.length !== 0 && touched){
      return styles.Error;
    }
  },

  printError: function(errors, touched){
    if(errors.length !== 0 && touched){
      return (
        <span className={styles.ErrorMessage}>
          {errorMessages[errors[0]]}
        </span>
      );
    }
  }
};

export default formUtilities;