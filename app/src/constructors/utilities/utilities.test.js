import {formatId, setSelect} from './utilities';

describe('data utilities', () => {
  test('setSelect() maps array item to obj with id and label', () => {
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


