import validation from './validation';

const field = 'test';
const objToValidate = (rule, value) => {
  return {
    [field]: {
      validation: {
        [rule]: {valid: false}
      },
      value: value
    }
  }
}

describe('<Form /> validation', () => {
  describe('required: true', () => {
    const rule = 'required';
    
    test('is valid when value is not empty', () => {
      const obj = objToValidate(rule, 'a_value');
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(true);
    })

    test('is invalid when value is empty', () => {
      const obj = objToValidate(rule, ' ');
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(false);
    })
  })

  describe('required_cb: true', () => {
    const rule = 'required_cb';
    
    test('is valid when at least one box is checked', () => {
      const obj = objToValidate(rule, {a: false, b: true});
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(true);
    })

    test('is invalid when at no boxes are checked', () => {
      const obj = objToValidate(rule, {a: false, b: false});
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(false);
    })
  })

  describe('is_valid_date: true', () => {
    const rule = 'is_valid_date';
    
    test('is valid when date is real', () => {
      const obj = objToValidate(rule, {day: "01", month: "01", year: "2019"});
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(true);
    })

    test('is invalid when date is not real', () => {
      const obj = objToValidate(rule, {day: "31", month: "02", year: "2019"});
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(false);
    })   
  })
  
})
