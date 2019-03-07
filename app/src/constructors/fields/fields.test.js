import {Input, Checkbox, setOptions, Select, formatId, setSelect} from './fields';

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
        options: [
          {id: 'value-1', label: 'value-1'}, 
          {id: 'value-2', label: 'value-2'},
          {id: 'value-3', label: 'value-3'},
        ]
      }
    }
    expect(ins).toEqual(model);
  })

  test('setSelect maps array item to obj with id and label', () => {
    const array = ["value 1"];
    const result = setSelect(array);
    expect(result).toEqual([{
      id: "value-1",
      label: "value 1"
    }])
  })
  
  
  test('formatId() removes whitespace and capitalization from strings', () => {
    const string = "Hello world";
    const result = formatId(string);
    expect(result).toBe("hello-world");
  })
  
  
})


