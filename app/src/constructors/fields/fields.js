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
      },
      valid: true,
      validaton: {
        is_valid_date: true
      }
    }
  }
}

export function Checkbox(name){
  return {
    [format(name)]: {
      type: 'checkbox',
      change: null,
      value: utilities.setCheckBoxValues(appData[name]),
      valid: false,
      validation: {
        required_cb: true
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

