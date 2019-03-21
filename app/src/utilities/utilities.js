const utilities = {
  formatId: function(str){
    return str.replace(/\s/g, "-").toLowerCase();
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

  prepareForSubmit: function(slice){
    let obj = {};
    Object.keys(slice).forEach(item => {
      obj[item] = slice[item].value
    });
    return obj;
  },

  setAllTouched: function(slice){
    const values = Object.values(slice);
    values.forEach(field => {
      field.touched = true;
    })
    return slice;
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

  updateField: function(event, group, slice){
    const {id, checked, value} = event.target;
    if(group){
      return {
        [group]: {
          ...slice[group],
          value: {
            ...slice[group].value,
            [id]: checked || checked === false ? checked : value
          }
        }
      }
    } 
    else {
      return {
        [id]: {
          ...slice[id],
          value: value
        }
      }
    }
  }
}

export default utilities;