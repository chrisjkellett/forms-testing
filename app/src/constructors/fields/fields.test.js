import {Input, Checkbox, Select, DateInput} from './fields';
import {setOptions} from '../utilities/utilities';

describe('models for creating form fields', () => {
  test('can create an Input model', () => {
    const key = 'test';
    const inputModel = new Input(key);
    expect(inputModel[key]).toBeDefined();
  })

  test('can create a Checkbox model', () => {
    const key = 'test';
    const checkboxModel = new Checkbox(key);
    expect(checkboxModel[key]).toBeDefined();
  })

  test('can create an Options model for Checkbox', () => {
    const data = ["value-1", "value-2"];
    const result = setOptions(data);
    expect(result["value-1"]).toEqual({"checked": false});
  })

  test('can create a Select model', () => {
    const ins = new Select('test');
    const model = {
      'test': {
        type: 'select',
        change: null,
        options: [
          {id: 'value-1', label: 'value-1'}, 
          {id: 'value-2', label: 'value-2'},
          {id: 'value-3', label: 'value-3'},
        ],
        value: 'value-1'
      }
    }
    expect(ins).toEqual(model);
  })
  
  test('can create a DateInput model', () => {
    const ins = new DateInput('test');
    const model = {
      'test': {
        type: 'date',
        change: null,
        value: []
      }
    }
    expect(ins).toEqual(model);
  })
  
})


