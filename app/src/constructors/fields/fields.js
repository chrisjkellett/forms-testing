import {Options} from '../options';

export function Input(name){
  return {
    [name]: {
      type: 'text',
      value: '',
      change: null
    }
  }
}

export function Checkbox(name){
  return {
    [name]: {
      type: 'checkbox',
      change: null,
      options: setOptions(Options[name])
    }
  }
}

export function Select(name){
  return {
    [name]: {
      type: 'select',
      change: null,
      options: setSelect(Options[name])
    }
  }
}

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