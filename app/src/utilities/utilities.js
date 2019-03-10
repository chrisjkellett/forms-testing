export function setSelect(array){
  if(array){
    return array.map(item => {
      return {id: formatId(item), label: item}
    })
  }

  else {
    return null;
  }
}

export function setDateSelect(array){
  return array.map(item => {
    return {
      id: item.length === 1 ? "0" + item : item,
      label: item
    }
  })
}

export function formatId(str){
  return str.replace(/\s/g, "-").toLowerCase();
}

export function setOptions(array){
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
}