import {Options} from '../options';
import {setOptions, setSelect} from '../utilities/utilities';

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
  const options = setSelect(Options[name]);
  return {
    [name]: {
      type: 'select',
      change: null,
      value: options[0].label,
      options: options
    }
  }
}

