const validation = {
  checkField: function(obj, id){
    const rules = obj[id].validation;
    if(rules.required){
      obj[id].valid = obj[id].value.trim() !== '';
    }
    return obj;
  }
}

export default validation;