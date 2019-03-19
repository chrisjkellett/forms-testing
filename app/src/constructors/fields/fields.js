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
      validation: {
        required: {valid: false},
        ...rules
      }
    }
  }
}

export function DateInput(name, rules){
  const today = moment();
  return {
    [format(name)]: {
      type: 'date',
      change: null,
      value: {
        day: today.format(appData.DATE_FORMAT.DAY),
        month: today.format(appData.DATE_FORMAT.MONTH),
        year: today.format(appData.DATE_FORMAT.YEAR)
      },
      validation: {
        is_valid_date: {valid: true},
        ...rules
      }
    }
  }
}

export function Checkbox(name, rules){
  return {
    [format(name)]: {
      type: 'checkbox',
      change: null,
      value: utilities.setCheckBoxValues(appData[name]),
      validation: {
        required_cb: {valid: false},
        ...rules
      }
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

