const utilities = {
  setSelect: function(array){
    if(array){
      return array.map(item => {
        return {id: this.formatId(item), label: item}
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
  }
}

export default utilities;