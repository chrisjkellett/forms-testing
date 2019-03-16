import appData from '../../app-data';
import utilities from '../../utilities/utilities';
import moment from 'moment';

const format = utilities.formatId;

export function Input(name, rules){
  return {
    [format(name)]: {
      type: 'text',
      value: '',
      change: null,
      valid: false,
      validation: {
        required: true,
        ...rules
      }
    }
  }
}

export function DateInput(name){
  const today = moment();
  return {
    [format(name)]: {
      type: 'date',
      change: null,
      value: {
        day: today.format(appData.DATE_FORMAT.DAY),
        month: today.format(appData.DATE_FORMAT.MONTH),
        year: today.format(appData.DATE_FORMAT.YEAR)
      }
    }
  }
}

export function Checkbox(name){
  return {
    [format(name)]: {
      type: 'checkbox',
      change: null,
      value: utilities.setCheckBoxValues(appData[name])
    }
  }
}

export function Select(name){
  const options = utilities.setSelectValues(appData[name]);
  return {
    [format(name)]: {
      type: 'select',
      change: null,
      value: options[0].value,
      options: options
    }
  }
}

