import validation from './validation';

const field = 'test';
const objToValidate = (rule, value, limiter) => {
  return {
    [field]: {
      touched: false,
      validation: {
        [rule]: {valid: false, ...limiter},
      },
      value: value
    }
  }
}

describe('<Form /> validation', () => {
  describe('required: true', () => {
    const rule = 'required';
    
    test('touched prop is set to prop whenever validation is run', () => {
      const obj = objToValidate(rule, 'a_value');
      expect(obj[field].touched).toBe(false);
      validation.checkField(obj, field);
      expect(obj[field].touched).toBe(true);
    })

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

  describe('maxLength: true', () => {
    const rule = 'maxLength';
    
    test('is valid when length is greater than limiter', () => {
      const obj = objToValidate(rule, "morethanlimiter", {limiter: 5});
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(true);
    });

    test('is invalid when length is less than limiter', () => {
      const obj = objToValidate(rule, "less", {limiter: 5});
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(false);
    });
  })
  
})
