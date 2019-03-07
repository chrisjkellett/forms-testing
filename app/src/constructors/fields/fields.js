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
      options: Options[name]
    }
  }
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