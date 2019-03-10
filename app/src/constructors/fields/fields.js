import appData from '../../app-data';
import utilities from '../../utilities/utilities';
import moment from 'moment';

const format = utilities.formatId;

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
      value: moment().format(appData.DATE_FORMAT)
    }
  }
}

export function Checkbox(name){
  return {
    [format(name)]: {
      type: 'checkbox',
      change: null,
      options: utilities.setOptions(appData[name])
    }
  }
}

export function Select(name){
  const options = utilities.setSelect(appData[name]);
  return {
    [format(name)]: {
      type: 'select',
      change: null,
      value: options[0].id,
      options: options
    }
  }
}

