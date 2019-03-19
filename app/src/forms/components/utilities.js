import React from 'react';
import styles from './forms.module.css';

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
          {errors[0]}
        </span>
      );
    }
  }
};

export default formUtilities;