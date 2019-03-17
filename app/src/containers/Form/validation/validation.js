const validation = {
  failed: 0,
  checkField: function(obj, id){
    const field = obj[id];
    const {validation} = field;

    if(validation){
      if(validation.required) this.$isRequired(field);
      if(validation.required_cb) this.$isRequiredCB(field);
    }
  
    field.valid = this.$completeValidation();
    return obj;
  },

  $isRequired: function(field){
    this.failed = field.value.trim() !== '' && this.failed++;
  },

  $isRequiredCB: function(field){
    this.failed = Object.keys(field.value).some(item => field.value[item]) && this.failed++;
  },
  
  $completeValidation: function(){
    return this.failed === 0
  }
}

export default validation;