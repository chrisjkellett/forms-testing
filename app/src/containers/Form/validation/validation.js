const validation = {
  checkField: function(obj, id){
    obj[id].valid = true
    return obj;
  }
}

export default validation;