import appData from '../../app-data';
import utilities from '../../utilities/utilities';
import moment from 'moment';

const format = utilities.formatId;

function DefaultFields(){
  return {
    change: null,
    touched: false,
  }
}

export function Checkbox(name, custom = {}){
  const validation = Object.assign({}, custom.validation);
  const value = utilities.setCheckBoxValues(custom.options);
  delete custom.validation;
  return {
    [format(name)]: {
      type: 'checkbox',
      validation: {
        required_cb: {valid: false},
        ...validation
      },
      ...new DefaultFields(),
      ...custom,
      value: value
    }
  }
}

export function DateInput(name, rules){
  const today = moment();
  return {
    [format(name)]: {
      type: 'date',
      value: {
        day: today.format(appData.DATE_FORMAT.DAY),
        month: today.format(appData.DATE_FORMAT.MONTH),
        year: today.format(appData.DATE_FORMAT.YEAR)
      },
      validation: {
        is_valid_date: {valid: true},
        ...rules
      },
      ...new DefaultFields()
    }
  }
}

export function Input(name, custom = {}){
  const validation = Object.assign({}, custom.validation);
  delete custom.validation;
  return {
    [format(name)]: {
      type: 'text',
      value: '',
      validation: {
        required: {valid: false},
        ...validation
      },
      ...new DefaultFields(),
      ...custom
    }
  }
}

export function TextArea(name, rules){
  return {
    [format(name)]: {
      type: 'textarea',
      value: '',
      validation: {
        required: {valid: false},
        ...rules
      },
      ...new DefaultFields()
    }
  }
}

export function Select(name){
  const options = utilities.setSelectValues(appData[name]);
  return {
    [format(name)]: {
      type: 'select',
      value: options[0].value,
      validation: null,
      options: options,
      ...new DefaultFields()
    }
  }
}

