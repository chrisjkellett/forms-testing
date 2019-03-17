const validation = {
  checkField: function(obj, id){
    const rules = obj[id].validation;

    if(rules){
      if(rules.required){
        obj[id].valid = obj[id].value.trim() !== '';
      }
      if(rules.required_cb){
        obj[id].valid = Object.keys(obj[id].value).some(item => obj[id].value[item])
      }
    }
  
    return obj;
  }
}

export default validation;