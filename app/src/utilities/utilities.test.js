import {formatId, setSelect, setDateSelect} from './utilities';

describe('data utilities', () => {
  test('setSelect() maps array item to obj with id and label', () => {
    const array = ["value 1"];
    const result = setSelect(array);
    expect(result).toEqual([{
      id: "value-1",
      label: "value 1"
    }])
  })

  test('setDateSelect() maps array item to obj with id and label', () => {
    const array = ["1", "2", "11"];
    const result = setDateSelect(array);
    expect(result).toEqual([
      {id: "01", label: "1"},
      {id: "02", label: "2"},
      {id: "11", label: "11"}
    ])
  })
    
  test('formatId() removes whitespace and capitalization from strings', () => {
    const string = "Hello world";
    const result = formatId(string);
    expect(result).toBe("hello-world");
  })
  
  
})


