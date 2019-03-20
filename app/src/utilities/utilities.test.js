import utilities from './utilities';

describe('data utilities', () => {
  test('setSelectValues() maps array item to obj with id and label', () => {
    const array = ["value 1"];
    const result = utilities.setSelectValues(array);
    expect(result).toEqual([{
      value: "value-1",
      label: "value 1"
    }])
  })

  test('setCheckBoxValues() creates an array of objects for checklist values', () => {
    const array = ["value 1", "value 2"];
    const result = utilities.setCheckBoxValues(array);
    expect(result).toEqual({
      "value 1": false,
      "value 2": false
    })
  })
  

  test('setDateSelect() maps array item to obj with id and label for days', () => {
    const array = ["1", "2", "11"];
    const result = utilities.setDateSelect(array);
    expect(result).toEqual([
      {id: "01", label: "1"},
      {id: "02", label: "2"},
      {id: "11", label: "11"}
    ])
  })

  test('setDateSelect() maps array item to obj with id and label for months', () => {
    const array = ["January", "February", "March"];
    const result = utilities.setDateSelect(array);
    expect(result).toEqual([
      {id: "01", label: "January"},
      {id: "02", label: "February"},
      {id: "03", label: "March"}
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
  
  describe('isValidSubmission()', () => {
    test('returns true if no fields are invalid', () => {
      const slice = {
        'field': {
          validation: {
            a_rule: {
              valid: true
            }
          }
        },
        'another_field': {
          validation: {
            a_rule: {
              valid: true
            },
            another_rule: {
              valid: true
            }
          }
        }
      }
      const result = utilities.isValidSubmission(slice);
      expect(result).toBe(true)
    })

    test('but fails if any field is invalid', () => {
      const slice = {
        'field': {
          validation: {
            a_rule: {
              valid: true
            }
          }
        },
        'another_field': {
          validation: {
            a_rule: {
              valid: false
            },
            another_rule: {
              valid: true
            }
          }
        }
      }
      const result = utilities.isValidSubmission(slice);
      expect(result).toBe(false)
    })
  }),

  test('setAllTouched() changed touched prop to true for all fields', () => {
    const slice = {
      a_field: {
        touched: false
      },
      another_field: {
        touched: false
      }
    }
    const result = utilities.setAllTouched(slice);
    expect(result.a_field.touched).toBe(true);
    expect(result.another_field.touched).toBe(true);
  })
  
  
  
})


