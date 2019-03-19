const validation = {
  checkField: function(obj, id){
    const field = obj[id];
    const {validation, value} = field;

    if(validation){
      if(validation.required) {
        validation.required.valid = this.tests.required(value);
      }
      if(validation.required_cb){
        validation.required_cb.valid = this.tests.required_cb(value);
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
    }
  }

}

export default validation;