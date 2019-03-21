const utilities = {
  setSelectValues: function(array){
    if(array){
      return array.map(item => {
        return {value: this.formatId(item), label: item}
      })
    }
    else {
      return null;
    }
  },

  setDateSelect: function(array){
    return array.map((item, index) => {
      if(!isNaN(+item))
        return {
          id: item.length === 1 ? "0" + item : item,
          label: item
        }
      else {
        return {
          id: index < 9 ? "0" + (index + 1): index + 1,
          label: item
        }
      }
    })
  },

  formatId: function(str){
    return str.replace(/\s/g, "-").toLowerCase();
  },

  setCheckBoxValues: function(array){
    if(array){
      let obj = {};
      array.forEach(item => {
        obj[item] = false
      })
      return obj;
    }
    else {
      return null;
    }
  },

  generateDays: function(){
    const days = [...Array(32).keys()];
    days.splice(0, 1);
    return days.map(d => d.toString());
  },

  isValidSubmission: function(slice){
    const values = Object.values(slice);
    const rules = values.map(value => value.validation);
    let fails = 0;
    rules.forEach(x => {
      if(x){
        if(!Object.values(x)[0].valid){
          fails++
        }
      }
    });
    return fails === 0;  
  },

  setAllTouched: function(slice){
    const values = Object.values(slice);
    values.forEach(field => {
      field.touched = true;
    })
    return slice;
  }
}

export default utilities;