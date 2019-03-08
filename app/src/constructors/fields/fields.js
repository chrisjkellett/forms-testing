import data from '../app-data';
import {setOptions, setSelect, formatId as format} from '../../utilities/utilities';
import moment from 'moment';

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
      value: moment().format(data.DATE_FORMAT)
    }
  }
}

export function Checkbox(name){
  return {
    [format(name)]: {
      type: 'checkbox',
      change: null,
      options: setOptions(data[name])
    }
  }
}

export function Select(name){
  const options = setSelect(data[name]);
  return {
    [format(name)]: {
      type: 'select',
      change: null,
      value: options[0].label,
      options: options
    }
  }
}

