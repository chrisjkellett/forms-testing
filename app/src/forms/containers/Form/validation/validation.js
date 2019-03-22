import moment from 'moment';

const validation = {
  checkField: function(obj, id){
    const field = obj[id];
    const {validation, value} = field;
    field.touched = true;
    
    if(validation){
      if(validation.required) {
        validation.required.valid = this.tests.required(value);
      }
      if(validation.required_cb){
        validation.required_cb.valid = this.tests.required_cb(value);
      }
      if(validation.is_valid_date){
        validation.is_valid_date.valid = this.tests.is_valid_date(value);
      }
      if(validation.maxLength){
        const {limiter} = validation.maxLength;
        validation.maxLength.valid = this.tests.maxLength(value, limiter);
      }
    }

    return obj;
  },

  tests: {
    required: function(value){
      return value.trim() !== '';
    },
    required_cb: function(value){
      return Object.keys(value).some(item => value[item]);
    },
    is_valid_date: function(value){
      const mapValues = Object.keys(value).map(item => value[item]);
      return moment(mapValues.join("-"), 'DD-MM-YYYY').isValid();
    },
    maxLength: function(value, limiter){
      return value.length >= limiter;
    }
  }

}

export default validation;