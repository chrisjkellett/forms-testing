const validation = {
  checkField: function(obj, id){
    const field = obj[id];
    const {validation, value} = field;

    if(validation){
      if(validation.required) {
        validation.required.valid = value.trim() !== '';
      }
    }

    return obj;
  }

}

export default validation;