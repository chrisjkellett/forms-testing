import utilities from './utilities';

describe('data utilities', () => {
  test('setSelect() maps array item to obj with id and label', () => {
    const array = ["value 1"];
    const result = utilities.setSelect(array);
    expect(result).toEqual([{
      id: "value-1",
      label: "value 1"
    }])
  })

  test('setDateSelect() maps array item to obj with id and label', () => {
    const array = ["1", "2", "11"];
    const result = utilities.setDateSelect(array);
    expect(result).toEqual([
      {id: "01", label: "1"},
      {id: "02", label: "2"},
      {id: "11", label: "11"}
    ])
  })
    
  test('formatId() removes whitespace and capitalization from strings', () => {
    const string = "Hello world";
    const result = utilities.formatId(string);
    expect(result).toBe("hello-world");
  })

  test('generateDays() returns an array of numbers 1 - 31 inclusive', () => {
    const result = utilities.generateDays();
    expect(result[0]).toBe("1");
    expect(result[30]).toBe("31");
  })
  
  
})


