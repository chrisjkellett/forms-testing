import {Options} from '../options';
import {setOptions, setSelect, formatId as format} from '../utilities/utilities';

export function Input(name){
  return {
    [format(name)]: {
      type: 'text',
      value: '',
      change: null
    }
  }
}

export function DateInput(name){
  return {
    [format(name)]: {
      type: 'date',
      change: null,
      value: []
    }
  }
}

export function Checkbox(name){
  return {
    [format(name)]: {
      type: 'checkbox',
      change: null,
      options: setOptions(Options[name])
    }
  }
}

export function Select(name){
  const options = setSelect(Options[name]);
  return {
    [format(name)]: {
      type: 'select',
      change: null,
      value: options[0].label,
      options: options
    }
  }
}

