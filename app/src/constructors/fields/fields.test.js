import {Input, Checkbox, setOptions, Select} from './fields';

describe('data utilities', () => {
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
        options: ['value-1', 'value-2', 'value-3']
      }
    }
    expect(ins).toEqual(model);
  })
  
  
})


