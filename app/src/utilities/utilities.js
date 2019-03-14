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
    return array.map(item => {
      return {
        id: item.length === 1 ? "0" + item : item,
        label: item
      }
    })
  },

  formatId: function(str){
    return str.replace(/\s/g, "-").toLowerCase();
  },

  setOptions: function(array){
    if(array){
      let obj = {};
      array.forEach(item => {
        obj[item] = {
          checked: false
        }
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