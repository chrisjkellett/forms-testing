import moment from 'moment';
import {Input, Checkbox, Select, DateInput} from './fields';
import utilities from '../../utilities/utilities';
import appData from '../../app-data';

describe('models for creating form fields', () => {
  test('can create an Input model with validation', () => {
    const key = 'test';
    const inputModel = new Input(key);
    expect(inputModel[key]).toBeDefined();
    expect(inputModel[key].validation).toBeDefined();
  })

  test('can create a Checkbox model', () => {
    const key = 'test';
    const checkboxModel = new Checkbox(key);
    expect(checkboxModel[key]).toBeDefined();
  })

  test('can create an Options model for Checkbox', () => {
    const data = ["value-1", "value-2"];
    const result = utilities.setCheckBoxValues(data);
    expect(result["value-1"]).toEqual(false);
  })

  test('can create a Select model', () => {
    const ins = new Select('test');
    const model = {
      'test': {
        type: 'select',
        change: null,
        options: [
          {value: 'value-1', label: 'value-1'}, 
          {value: 'value-2', label: 'value-2'},
          {value: 'value-3', label: 'value-3'},
        ],
        value: 'value-1'
      }
    }
    expect(ins).toEqual(model);
  })
  
  test('can create a DateInput model', () => {
    const ins = new DateInput('test');
    const today = moment();
    const model = {
      'test': {
        type: 'date',
        change: null,
        value: {
          day: today.format(appData.DATE_FORMAT.DAY),
          month: today.format(appData.DATE_FORMAT.MONTH),
          year: today.format(appData.DATE_FORMAT.YEAR)
        }
      }
    }
    expect(ins).toEqual(model);
  })
  
})


